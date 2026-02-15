import React, { useState } from 'react'
import { css } from '@styled-system/css'
import { supplies } from '@/data/supplies'

const ContainerNav = css({
    display: 'flex',
    color: 'var(--color-blanco)',
    fontFamily: 'var(--fuente-work-sans)',
    fontSize: '22px',
    border: '1px solid var(--color-blanco)',
    borderRadius: '1.5rem',
    margin: '0 1rem'
})

const ButtonNav = css({
    flex: '1',
    padding: '0.5rem 1rem',
    borderRadius: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
})

const ButtonNavSelected = css({
    backgroundColor: 'var(--color-blanco)',
    color: 'var(--color-negro)'
})

export default function ListSupplies() {
    const [selectedCategory, setSelectedCategory] = useState('todo');
    
    // Extraer categorías únicas
    const categories = [...new Set(supplies.map(supply => supply.category))];
    
    return (
        <div>
            <nav className={ContainerNav}>
                <button 
                    key="todo" 
                    className={`${ButtonNav} ${selectedCategory === 'todo' ? ButtonNavSelected : ''}`}
                    onClick={() => setSelectedCategory('todo')}
                >
                    Todo
                </button>
                {categories.map(category => (
                    <button 
                        key={category} 
                        className={`${ButtonNav} ${selectedCategory === category ? ButtonNavSelected : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </div>
    )
}
