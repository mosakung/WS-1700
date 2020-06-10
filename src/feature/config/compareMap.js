const compareMap = {
    status: null,
    tableName: "district",
    state: [
        {
            status: false,
            tableName: "subDistrict",
            state: [
                {
                    status: false,
                    tableName: "mark",
                    state: [

                    ]
                },
                {
                    status: true,
                    tableName: "zipCode",
                    state: [
                        {
                            status: false,
                            tableName: "mark",
                            state: [

                            ]
                        },
                        {
                            status: true,
                            tableName: "setAll",
                            state: [

                            ]
                        }
                    ]
                }
            ]
        },
        {
            status: true,
            tableName: "subDistrict",
            state: [
                {
                    status: false,
                    tableName: "subDistrict",
                    state: [
                        {
                            status: false,
                            tableName: "mark",
                            state: [

                            ]
                        },
                        {
                            status: true,
                            tableName: "zip",
                            state: [
                                {
                                    status: false,
                                    tableName: "mark",
                                    state: [

                                    ]
                                },
                                {   
                                    status: true,
                                    tableName: "setAll",
                                    state: [

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    status: true,
                    tableName: "setAll",
                    state: [

                    ]
                }
            ]
        }
    ]
}

export default compareMap