import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import {describe, expect, test} from 'vitest';
import Component from './Component.svelte';


describe('snack BindArguments', () =>
{
    const user = userEvent.setup();
    render(Component);
    test('unbound', async () => {

        const div = screen.getByTestId('hello-world');
        expect(div).toHaveTextContent('Hello world');
    });

    test('bound rich', async () => {
        const div = screen.getByTestId('hello-rich');
        expect(div).toHaveTextContent('Hello rich');
    });

    test('multi arguments unbound', async () => {
        const div = screen.getByTestId('hello-richHarris');
        expect(div).toHaveTextContent('Hello Rich Harris');
    });

    test('multi arguments second bound', async () => {
        const div = screen.getByTestId('hello-richDotCom');
        expect(div).toHaveTextContent('Hello Rich DotCom');
    });
});