name: "🐛 Bug Report"
description: Create a new ticket for a bug.
title: "🐛 [BUG] - <title>"
labels: [
  "bug"
]
body:
  - type: textarea
    id: description
    attributes:
      label: "描述問題"
      description: 請清楚描述問題
      placeholder: Short and explicit description of your incident...
    validations:
      required: true
  - type: input
    id: reprod-url
    attributes:
      label: "問題url"
      description: 請輸入問url
      placeholder: ex. [https://github.com/USERNAME/REPO-NAME](https://www.ssangyongsports.org/p)
    validations:
      required: true
  - type: textarea
    id: reprod
    attributes:
      labe: "如何解決問題"
      description: 請描述如呵解決問題
      value: |
        1. 檔案 '...'
        2. 點擊 '....'
      render: bash
    validations:
      required: true
  - type: textarea
    id: screenshot
    attributes:
      label: "截圖"
      description: 如果適用，請添加螢幕截圖以幫助解釋您的問題。
      value: |
        ![DESCRIPTION](LINK.png)
      render: bash
    validations:
      required: false
  - type: textarea
    id: logs
    attributes:
      label: "Logs"
      description: Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
      render: bash
    validations:
      required: false
 
