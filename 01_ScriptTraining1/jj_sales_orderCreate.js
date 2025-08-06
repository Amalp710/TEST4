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

             let newRec=record.create({
                type:record.Type.SALES_ORDER,
                isDynamic:true
            })

            newRec.setValue({
                fieldId:'entity',
                value:7207
            })

            newRec.selectNewLine({
                sublistId:'item'

            })
            newRec.setCurrentSublistValue({
                sublistId:'item',
                fieldId:'item',
                value:3815

            })

            newRec.setCurrentSublistValue({
                sublistId:'item',
                fieldId:'quantity',
                value:3

            })

            newRec.commitLine({
                sublistId:'item'
            })

            let salesId=newRec.save()

            log.debug(`sales order creation sucess ,salesorder id is ${salesId}`)

        }

        return {execute}

    });