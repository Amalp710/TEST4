/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record','N/log'],
    /**
 * @param{record} record
 */
    (record,log) => {
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

            const customerId = 7202; // Replace with a valid internal ID

            try {
                const customerRec = record.load({
                type: record.Type.CUSTOMER,
                id: customerId
                });

                const name = customerRec.getValue({ fieldId: 'entityid' });
                const email = customerRec.getValue({ fieldId: 'email' });
                const phone = customerRec.getValue({ fieldId: 'phone' });
                const subsidiary = customerRec.getText({ fieldId: 'subsidiary' });

                log.debug('Customer Details', `
                    ID: ${customerId}
                    Name: ${name}
                    Email: ${email}
                    Phone: ${phone}
                    Subsidiary: ${subsidiary}
                `);
            } catch (e) {
                log.error('Error Loading Customer', e);
            }

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

            const customerId=7202
            const salesRepId=7139

            let customerRec=record.load({
                type:record.Type.CUSTOMER,
                id:customerId,
                isDynamic:true
            })

            customerRec.setValue({
                fieldId:'salesrep',
                value:salesRepId
            })

            let updateId=customerRec.save()

            let customerName = customerRec.getValue({ fieldId: 'entityid' });

             let salesRepRec = record.load({
            type: record.Type.EMPLOYEE,
            id: salesRepId
            });
            let salesRepName = salesRepRec.getValue({ fieldId: 'entityid' });


             log.debug('Customer Updated', `Customer ${customerName} sales rep updated to ${salesRepName}`);

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