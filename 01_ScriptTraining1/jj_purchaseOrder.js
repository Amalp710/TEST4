/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(['N/record'],
    /**
 * @param{record} record
 */
    (record) => {

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        const execute = (scriptContext) => {

            let poRec = record.create({
                type: record.Type.PURCHASE_ORDER,
                isDynamic: true
            });


            poRec.setValue({
                fieldId: 'entity',
                value: 7176 
            });

            poRec.setValue({
             fieldId: 'location',
                value: 74
            });


            
            poRec.selectNewLine({
                sublistId: 'item'
            });

            poRec.setCurrentSublistValue({
                sublistId: 'item',
                fieldId: 'item',
                value: 3815 
            });

            poRec.setCurrentSublistValue({
                sublistId: 'item',
                fieldId: 'quantity',
                value: 7
            });

            poRec.commitLine({
                sublistId: 'item'
            });

            
            let poId = poRec.save();

            log.debug('Purchase Order Created', `Purchase Order ID: ${poId}`);

        }

        return {execute}

    });