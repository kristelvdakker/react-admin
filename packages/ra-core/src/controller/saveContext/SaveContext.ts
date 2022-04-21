import { createContext } from 'react';
import {
    RaRecord,
    onError,
    OnSuccess,
    TransformData,
    MutationMode,
} from '../../types';

export interface SaveContextValue<RecordType extends RaRecord = any> {
    save?: SaveHandler<RecordType>;
    saving?: boolean;
    mutationMode?: MutationMode;
}

export type SaveHandler<RecordType> = (
    record: Partial<RecordType>,
    callbacks?: {
        onSuccess?: OnSuccess;
        onError?: onError;
        transform?: TransformData;
    }
) => Promise<void | RecordType> | Record<string, string>;

export const SaveContext = createContext<SaveContextValue>(undefined);
