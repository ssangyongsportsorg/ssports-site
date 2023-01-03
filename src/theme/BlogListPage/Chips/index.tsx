
import React from "react"
import { Chip } from "../Chip"
import styles from "./styles.module.css"

export type Props = {
  items: Array<{ name: string; permalink: string }>
  activeChip?: string
}

export const Chips = ({ items, activeChip }: Props) => (
  <div className={styles.root}>
    {items.map(({ name, permalink }) => (
      <Chip
        key={permalink}
        className={styles.chip}
        label={name}
        permalink={permalink}
        active={activeChip === permalink}
      />
    ))}

    <Chip className={styles.chip} label="More..." permalink="/blog/tags" />
  </div>
)
