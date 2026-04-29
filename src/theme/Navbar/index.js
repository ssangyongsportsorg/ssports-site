import React, { useEffect, useRef } from 'react';
import './navbar.css';

export default function Navbar() {
  const scriptInitialized = useRef(false);

  useEffect(() => {
    if (scriptInitialized.current) return;
    scriptInitialized.current = true;

    // Scroll shadow
    const header = document.getElementById('sy-main-header');
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle('sy-shadow-md', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);

    // Mobile drawer
    const overlay = document.getElementById('sy-mobileSheetOverlay');
    const menuBtn = document.getElementById('sy-menuTriggerBtn');
    const closeBtn = document.getElementById('sy-closeSheetBtn');
    const openSheet = () => {
      overlay && overlay.classList.add('open');
      document.body.classList.add('sy-no-scroll');
    };
    const closeSheet = () => {
      overlay && overlay.classList.remove('open');
      document.body.classList.remove('sy-no-scroll');
    };
    if (menuBtn) menuBtn.addEventListener('click', openSheet);
    if (closeBtn) closeBtn.addEventListener('click', closeSheet);
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSheet(); });

    // Search modal
    const modal = document.getElementById('sy-globalSearchModal');
    const searchInput = document.getElementById('sy-searchInputGlobal');
    const preview = document.getElementById('sy-searchResultsPreview');
    const openSearch = () => {
      modal && modal.classList.add('open');
      setTimeout(() => searchInput && searchInput.focus(), 80);
    };
    const closeSearch = () => {
      if (!modal) return;
      modal.classList.remove('open');
      if (searchInput) searchInput.value = '';
      if (preview) preview.classList.add('hidden');
    };
    const searchBtnDesktop = document.getElementById('sy-searchBtnDesktop');
    const mobileSearchIcon = document.getElementById('sy-mobileSearchIcon');
    const mobileSheetSearchBtn = document.getElementById('sy-mobileSheetSearchBtn');
    const closeSearchModal = document.getElementById('sy-closeSearchModal');
    if (searchBtnDesktop) searchBtnDesktop.addEventListener('click', openSearch);
    if (mobileSearchIcon) mobileSearchIcon.addEventListener('click', openSearch);
    if (mobileSheetSearchBtn) mobileSheetSearchBtn.addEventListener('click', () => { closeSheet(); setTimeout(openSearch, 220); });
    if (closeSearchModal) closeSearchModal.addEventListener('click', closeSearch);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (!val) { if (preview) preview.classList.add('hidden'); return; }
        if (preview) {
          preview.classList.remove('hidden');
          preview.innerHTML = `
            <div class="sy-search-results-label">搜尋結果（展示）</div>
            <a href="#" class="sy-search-result-item">
              <div class="sy-search-result-title">關於「${val}」的最新論壇文章</div>
              <div class="sy-search-result-sub">雙龍體育官方消息</div>
            </a>
            <a href="#" class="sy-search-result-item">
              <div class="sy-search-result-title">幫助中心：${val} 相關教學</div>
              <div class="sy-search-result-sub">使用說明與常見問題</div>
            </a>`;
        }
      });
    }

    // Desktop sports dropdown
    const sportsTrigger = document.getElementById('sy-sportsTriggerDesktop');
    const sportsDropdown = document.getElementById('sy-sportsDropdown');
    let hideTimer;
    const showDrop = () => { clearTimeout(hideTimer); sportsDropdown && sportsDropdown.classList.add('open'); };
    const hideDrop = () => { hideTimer = setTimeout(() => sportsDropdown && sportsDropdown.classList.remove('open'), 120); };
    if (sportsTrigger) {
      sportsTrigger.addEventListener('mouseenter', showDrop);
      sportsTrigger.addEventListener('mouseleave', hideDrop);
      sportsTrigger.addEventListener('click', (e) => { e.preventDefault(); sportsDropdown && sportsDropdown.classList.toggle('open'); });
    }
    if (sportsDropdown) {
      sportsDropdown.addEventListener('mouseenter', showDrop);
      sportsDropdown.addEventListener('mouseleave', hideDrop);
    }

    // Support panel
    const supportTrigger = document.getElementById('sy-supportTrigger');
    const supportPanel = document.getElementById('sy-supportPanel');
    const panelBackdrop = document.getElementById('sy-panelBackdrop');
    const openPanel = () => {
      if (!supportPanel || !supportTrigger || !panelBackdrop) return;
      supportPanel.classList.add('open');
      supportTrigger.classList.add('open');
      supportTrigger.setAttribute('aria-expanded', 'true');
      panelBackdrop.classList.add('active');
    };
    const closePanel = () => {
      if (!supportPanel || !supportTrigger || !panelBackdrop) return;
      supportPanel.classList.remove('open');
      supportTrigger.classList.remove('open');
      supportTrigger.setAttribute('aria-expanded', 'false');
      panelBackdrop.classList.remove('active');
    };
    if (supportTrigger) supportTrigger.addEventListener('click', () => { supportPanel && supportPanel.classList.contains('open') ? closePanel() : openPanel(); });
    if (panelBackdrop) panelBackdrop.addEventListener('click', closePanel);
    const onKeydown = (e) => { if (e.key === 'Escape') closePanel(); };
    document.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return (
    <>
      {/* ── Main Header ── */}
      <header id="sy-main-header" className="sy-main-header">
        <div className="sy-header-inner">
          <a href="/" id="sy-logo-link" className="sy-logo-link">
            <img src="https://i.pixi.mg/i/1d12b4723ba119a9be5571f7.png" alt="雙龍體育" />
          </a>

          <nav className="sy-desktop-nav">
            <div className="sy-dropdown-wrapper">
              <button id="sy-sportsTriggerDesktop" className="sy-nav-btn">
                體育
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div id="sy-sportsDropdown" className="sy-dropdown-content">
                <div className="sy-dropdown-inner">
                  <a href="/forum/announcements/longshiguantongzhi-1" className="sy-dropdown-item">
                    <span className="sy-dropdown-item-title">雙龍職棒</span>
                    <span className="sy-dropdown-item-desc">雙龍職棒官方網站</span>
                  </a>
                  <a href="https://sba.sysports.de/" target="_blank" rel="noreferrer" className="sy-dropdown-item">
                    <span className="sy-dropdown-item-title">雙龍職籃</span>
                    <span className="sy-dropdown-item-desc">雙龍職籃官方網站</span>
                  </a>
                  <a href="/forum/announcements/longshiguantongzhi" className="sy-dropdown-item">
                    <span className="sy-dropdown-item-title">雙龍足球</span>
                    <span className="sy-dropdown-item-desc">雙龍足球官方網站</span>
                  </a>
                </div>
              </div>
            </div>
            <a href="/game"  className="sy-nav-link">賽程</a>
            <a href="/event" className="sy-nav-link">組織活動</a>
            <a href="/forum" className="sy-nav-link">論壇</a>
            <a href="/blog"  className="sy-nav-link">部落格</a>
            <a href="https://support.sysports.de/open.php" target="_blank" rel="noreferrer" className="sy-nav-link">聯絡我們</a>
          </nav>

          <div className="sy-desktop-search">
            <button id="sy-searchBtnDesktop" className="sy-icon-btn" aria-label="搜尋">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="sy-mobile-controls">
            <button id="sy-mobileSearchIcon" className="sy-icon-btn" aria-label="搜尋">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button id="sy-menuTriggerBtn" className="sy-icon-btn" aria-label="選單">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6"  x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Sub Navbar ── */}
      <div id="sy-sub-navbar" className="sy-sub-navbar">
        <div className="sy-sub-navbar-inner">
          <button id="sy-supportTrigger" className="sy-sub-nav-trigger" aria-expanded="false">
            支援
            <svg className="sy-chevron-sm" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Support Panel ── */}
      <div id="sy-supportPanel" className="sy-support-panel">
        <div className="sy-support-panel-list">
          <a href="https://support.sysports.de/open.php" target="_blank" rel="noreferrer" className="sy-support-panel-item">
            <div className="sy-support-panel-item-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1 0 4v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 0-4Z"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
              </svg>
              建立新案件
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="https://support.sysports.de/" target="_blank" rel="noreferrer" className="sy-support-panel-item">
            <div className="sy-support-panel-item-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              案件狀態查詢
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <a href="/login" className="sy-support-panel-item">
            <div className="sy-support-panel-item-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              登入
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      <div id="sy-panelBackdrop" className="sy-panel-backdrop"></div>

      {/* ── Mobile Drawer ── */}
      <div id="sy-mobileSheetOverlay" className="sy-mobile-sheet-overlay">
        <div id="sy-mobileSheetDrawer" className="sy-mobile-sheet-drawer">
          <div className="sy-drawer-header">
            <img src="https://i.pixi.mg/i/1d12b4723ba119a9be5571f7.png" alt="雙龍體育" />
            <button id="sy-closeSheetBtn" className="sy-icon-btn" aria-label="關閉選單">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6"  x2="6"  y2="18"></line>
                <line x1="6"  y1="6"  x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="sy-drawer-body">
            <div className="sy-drawer-section">
              <button id="sy-mobileSheetSearchBtn" className="sy-drawer-search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                搜尋...
              </button>
            </div>
            <div className="sy-drawer-section">
              <div className="sy-drawer-label">體育聯盟</div>
              <div className="sy-drawer-links">
                <a href="/forum/announcements/longshiguantongzhi-1" className="sy-drawer-link">雙龍職棒</a>
                <a href="https://sba.sysports.de/" target="_blank" rel="noreferrer" className="sy-drawer-link">雙龍職籃</a>
                <a href="/forum/announcements/longshiguantongzhi" className="sy-drawer-link">雙龍足球</a>
              </div>
            </div>
            <div className="sy-drawer-section">
              <div className="sy-drawer-label">導航</div>
              <div className="sy-drawer-links">
                <a href="/game"  className="sy-drawer-link">賽程</a>
                <a href="/event" className="sy-drawer-link">組織活動</a>
                <a href="/forum" className="sy-drawer-link">論壇</a>
                <a href="/blog"  className="sy-drawer-link">部落格</a>
                <a href="https://support.sysports.de/open.php" target="_blank" rel="noreferrer" className="sy-drawer-link">聯絡我們</a>
              </div>
            </div>
            <div className="sy-drawer-section">
              <div className="sy-drawer-label">支援</div>
              <div className="sy-drawer-links">
                <a href="https://support.sysports.de/open.php" target="_blank" rel="noreferrer" className="sy-drawer-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1 0 4v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 0-4Z"/>
                    <line x1="9" y1="12" x2="15" y2="12"/>
                  </svg>
                  建立新案件
                </a>
                <a href="https://support.sysports.de/" target="_blank" rel="noreferrer" className="sy-drawer-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  案件狀態查詢
                </a>
                <a href="/login" className="sy-drawer-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  登入
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search Modal ── */}
      <div id="sy-globalSearchModal" className="sy-global-search-modal">
        <div className="sy-search-box">
          <div className="sy-search-input-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="sy-searchInputGlobal" placeholder="搜尋文章、論壇、幫助..." autoComplete="off" />
            <button id="sy-closeSearchModal" className="sy-icon-btn" aria-label="關閉搜尋">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6"  x2="6"  y2="18"></line>
                <line x1="6"  y1="6"  x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div id="sy-searchResultsPreview" className="sy-search-results-preview hidden"></div>
          <div className="sy-search-hint">搜尋結果僅為示意顯示。</div>
        </div>
      </div>
    </>
  );
}
