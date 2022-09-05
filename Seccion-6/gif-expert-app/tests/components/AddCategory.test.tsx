import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        type Props = {
            onNewCategory: (newCategory: string) => void,
        }
        render(<AddCategory onNewCategory={ ()=> {}} />);
    })
})