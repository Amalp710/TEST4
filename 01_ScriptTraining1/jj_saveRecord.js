/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/log', 'N/record'],
    /**
 * @param{log} log
 * @param{record} record
 */
    (log, record) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
          

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {
              try {

                let newRec=scriptContext.newRecord

                let documentId=newRec.getValue({
                    fieldId:'tranid'
                })

                let name=newRec.getValue({
                    fieldId:'entity'
                })

                // let customer=record.load({
                //     type:record.Type.CUSTOMER,
                //     id:entityId
                // })

                // const customerName=customer.getValue({fieldId:'entityId'})

                const customerName = newRec.getText({ fieldId: 'entity' });

                log.debug('Sales Order Details', `Document Number: ${documentId}, Customer Name: ${customerName}`);

                
            } catch (error) {
                log.debug(error)
                
            }

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

         

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });