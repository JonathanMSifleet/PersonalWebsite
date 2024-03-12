import type { FC } from 'react';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';

interface IToggle {
  enabled: boolean;
  onChange: () => void;
}

export const Toggle: FC<IToggle> = ({ enabled, onChange }) => (
  <Switch
    checked={enabled}
    className={clsx(
      'relative inline-flex h-6 w-11 items-center rounded-full',
      enabled ? 'bg-blue-600' : 'bg-gray-200'
    )}
    onChange={onChange}
  >
    <span
      className={clsx(
        'inline-block h-4 w-4 transform rounded-full bg-white transition',
        enabled ? 'translate-x-6' : 'translate-x-1'
      )}
    />
  </Switch>
);
