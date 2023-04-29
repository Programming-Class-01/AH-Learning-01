interface IPaytype {
    id: string;
    paytype: "hourly" | "salary";
}

const paytypes: IPaytype[] = [
    { "id": "141bb5b6-e4c8-4c91-afff-664b653b49da", "paytype": "hourly" },
    { "id": "ec9f68b4-2dea-4200-a02e-24cb679efecd", "paytype": "salary" },
    { "id": "47e5a258-339c-4e27-8511-1a617286481d", "paytype": "hourly" },
    { "id": "305e29b7-820e-4e70-8978-78bc7e56287e", "paytype": "salary" },
    { "id": "d7f7c072-109f-45c9-b8fa-202a7fed9542", "paytype": "hourly" },
    { "id": "bee79224-950a-4cb4-9af2-0c5ed4efab6a", "paytype": "salary" },
    { "id": "b70d2df3-38ce-4d99-94a5-1225b18bf474", "paytype": "hourly" },
    { "id": "f36d73ce-622b-4bda-9685-28bb54ede63f", "paytype": "salary" },
    { "id": "d244ab68-646b-48e2-a76c-816332b850ad", "paytype": "hourly" },
    { "id": "8b513252-a1cb-4a05-9dac-51913a7fda59", "paytype": "salary" },
    { "id": "9216eb1e-c397-40e0-b676-373604cc0a4f", "paytype": "hourly" },
    { "id": "f4468a41-6b80-48ea-bdb0-27af1eec31e8", "paytype": "salary" },
    { "id": "f725b9f3-5dce-48a7-84ea-f82b34ac7ca2", "paytype": "hourly" },
    { "id": "4803ef4b-c2b2-41a2-8d2b-e8eef28dae02", "paytype": "salary" },
    { "id": "16f01c14-d0bb-47ce-af93-47f82403a169", "paytype": "hourly" },
    { "id": "0204c725-d72f-4880-a465-5e6f7cfc0e2b", "paytype": "salary" },
    { "id": "f86c3969-bacc-4301-9c2f-b601dbd281e5", "paytype": "hourly" },
    { "id": "4ce0193c-8972-4718-a38c-f69837886537", "paytype": "salary" },
    { "id": "0eaadb05-f688-403b-8c9c-135ec72e62fd", "paytype": "hourly" },
    { "id": "5b4fc9ec-bf1f-4cd3-9f37-411e4b692d45", "paytype": "salary" },
    { "id": "8b635247-2707-44e9-8d35-2df3adef1d6d", "paytype": "hourly" },
    { "id": "266b9fe5-3b15-466e-971a-7ceb445819c3", "paytype": "salary" },
    { "id": "8db24881-e054-48bd-a19f-e92b6c6f2b85", "paytype": "hourly" },
    { "id": "b3af0e1f-14ec-4c03-bb88-4b62fc67d192", "paytype": "salary" },
    { "id": "87092a64-69c0-45aa-b393-c2c3b8643034", "paytype": "hourly" },
    { "id": "10041427-62c7-4417-babb-54107da5f25d", "paytype": "salary" },
    { "id": "03537624-3572-4648-b4ac-9b07ed40966b", "paytype": "hourly" },
    { "id": "77fef211-08e9-4169-842b-4aa4ec6530c2", "paytype": "salary" },
    { "id": "e94c466d-2371-4196-a2d4-d2aef31ffbd0", "paytype": "hourly" },
    { "id": "8af39420-2525-4f76-ae6c-61787feebfb9", "paytype": "salary" },
    { "id": "222b6ae1-2123-4bad-b25c-f15e73efff28", "paytype": "hourly" },
    { "id": "b36f9a7a-9ddb-44bd-af04-3272997e7d45", "paytype": "salary" },
    { "id": "30110c45-fdff-42b2-8321-2800299d9da9", "paytype": "hourly" },
    { "id": "73acd5ad-69c6-450b-aefe-92327432a5d5", "paytype": "salary" },
    { "id": "46461ac1-c4a0-4874-844c-37168209149b", "paytype": "hourly" },
    { "id": "6b8fa324-5ad0-4016-9018-707ab23c49b3", "paytype": "salary" },
    { "id": "37ecacbd-e18f-47e6-952b-ec2fa2c64e18", "paytype": "hourly" },
    { "id": "187e0bc7-debc-4ba6-99dd-734afe828202", "paytype": "salary" },
    { "id": "cf41f9ae-5a6e-4d56-b710-bcf26a8f0c35", "paytype": "hourly" },
    { "id": "49d0c2d1-620c-4398-aefa-a27ed4d31069", "paytype": "salary" },
    { "id": "b197696a-acae-4829-8af1-bcb417ec0535", "paytype": "hourly" },
    { "id": "08deab19-1f24-4ba2-b6c1-94cb46491d58", "paytype": "salary" },
    { "id": "a3ae0c5e-4ee9-4dd7-a71f-999f14eb36b8", "paytype": "hourly" },
    { "id": "0342b510-9726-4cc8-9b11-65eb37a3ca9f", "paytype": "salary" },
    { "id": "0611d771-62c9-48cb-97e9-0b0fc583a097", "paytype": "hourly" },
    { "id": "6e6cf273-2979-4104-b2b9-8b146f4d809d", "paytype": "salary" },
    { "id": "ab8a80a6-214e-4593-a2ca-f49ec0442a81", "paytype": "hourly" },
    { "id": "1db7ae15-d301-40c3-b6fd-c81a0e440e37", "paytype": "salary" },
    { "id": "87fa3a81-13e0-42bf-b7a1-94f075ea0f74", "paytype": "hourly" },
    { "id": "0257240f-7eb4-4e60-9c11-c81723d96dd6", "paytype": "salary" },
    { "id": "84c3d0f3-d87d-4796-b151-04d294608aa6", "paytype": "hourly" },
    { "id": "343e7c11-3aa3-4a7d-8b14-3f07f40c6091", "paytype": "salary" },
    { "id": "0f8cf6ed-e0f5-4ab1-a19a-5e63646486b0", "paytype": "hourly" },
    { "id": "bd98825e-7005-4453-96eb-ba62c0876126", "paytype": "salary" },
    { "id": "d4c898a1-f72b-44a5-bc89-897d590518a7", "paytype": "hourly" },
    { "id": "de171791-17aa-47f9-bdb6-b203932a08a5", "paytype": "salary" },
    { "id": "7263c940-731b-42c2-a3d5-5c2506caaaca", "paytype": "hourly" },
    { "id": "842b4250-709c-436b-ae6c-f77d09adba3e", "paytype": "salary" },
    { "id": "39710f3d-db6c-4707-ab68-3e21a911c13e", "paytype": "hourly" },
    { "id": "dd64e23e-437a-44be-b8c2-1e99b8334de6", "paytype": "salary" },
    { "id": "bb4caf43-f6d0-4a2c-b5ce-0d35167e0055", "paytype": "hourly" },
    { "id": "62ef1bdf-de72-4bd9-b46d-9318a012560c", "paytype": "salary" },
    { "id": "a3ffa257-7125-4f94-96b7-eea638c900e0", "paytype": "hourly" },
    { "id": "a2f1f417-afd9-4abc-8f5a-dbb742f6f7fe", "paytype": "salary" },
    { "id": "5dc035db-09e7-47a9-a173-02855bae2a3e", "paytype": "hourly" },
    { "id": "adbacfc8-7a1b-4277-86c8-e4cb5a44495a", "paytype": "salary" },
    { "id": "6f2f4c16-90d0-4e8e-80f1-33bfbd77d441", "paytype": "hourly" },
    { "id": "a881f9b0-9d9c-4ddf-8a7a-9240200e2faa", "paytype": "salary" },
    { "id": "80ce130c-d48d-4644-9fdd-cfa13510bc26", "paytype": "hourly" },
    { "id": "3a9e4c8e-5168-4aa3-89ea-4a4313c8edd3", "paytype": "salary" },
    { "id": "6dc0e379-de8f-4828-bef9-4635a64f6499", "paytype": "hourly" },
    { "id": "5f685fc7-bf98-4bcd-b76f-b93bcc3a819e", "paytype": "salary" },
    { "id": "2ee1ec45-9a54-4ec8-a764-839d75cd513b", "paytype": "hourly" },
    { "id": "891449ed-843b-4bd2-992c-4f525320e9ef", "paytype": "salary" },
    { "id": "f19dd160-4d27-472b-a9b1-b72afa177567", "paytype": "hourly" },
    { "id": "238adc96-c80c-4b10-aa83-c6ff6bde08fe", "paytype": "salary" },
    { "id": "e4f471a7-8292-4973-90aa-623494d99827", "paytype": "hourly" },
    { "id": "b271d3d5-58e0-4cef-ba68-fe864c39b03f", "paytype": "salary" },
    { "id": "a46373fe-1270-4014-856e-ffb28e334b61", "paytype": "hourly" },
    { "id": "78b0e5c8-027e-44b6-9743-b01bfff1db77", "paytype": "salary" },
    { "id": "ea48c0e2-b562-4857-baa5-4ad001a5dade", "paytype": "hourly" },
    { "id": "5a98e479-50cc-47d8-8dfb-664d8204add3", "paytype": "salary" },
    { "id": "0cfb8764-9449-42f1-bbd0-826ac5607799", "paytype": "hourly" },
    { "id": "a662734b-530d-4a26-a695-32b6f1b59334", "paytype": "salary" },
    { "id": "3cf95d41-afbc-4442-84a9-2d890795760c", "paytype": "hourly" },
    { "id": "7af76640-5075-4ffd-9d5e-2d4e39f5187c", "paytype": "salary" },
    { "id": "9bd71519-6ece-4caa-838c-4ae58d75b49e", "paytype": "hourly" },
    { "id": "e7d3c091-ef21-4acc-8f98-1be44643d477", "paytype": "salary" },
    { "id": "7a8840d1-a233-427f-87f3-22ea94e7e8ab", "paytype": "hourly" },
    { "id": "20b89029-fd71-4f78-a788-b3ee01e30a53", "paytype": "salary" },
    { "id": "f74ca1f7-912e-4432-954f-30ca2ae84a3d", "paytype": "hourly" },
    { "id": "2dcad753-9184-4ca9-9173-00fb39932505", "paytype": "salary" },
    { "id": "b2b6535d-94ea-422d-a786-78074f793943", "paytype": "hourly" },
    { "id": "18636bf5-11f6-48ac-a9cc-9b84edfdd327", "paytype": "salary" },
    { "id": "aafd84ad-6dd5-445c-9ddb-ce9ab626038d", "paytype": "hourly" },
    { "id": "7f043a99-1271-46f6-bea8-20e43519e5f6", "paytype": "salary" },
    { "id": "b42e69dc-a2a1-4b17-aa82-5d071f58a63f", "paytype": "hourly" },
    { "id": "f8acb8fd-0c06-4735-8d5c-434a3e19edf2", "paytype": "salary" },
    { "id": "bef295ac-aaa5-4e84-9d96-9e9b928d38b2", "paytype": "hourly" },
    { "id": "8f02200a-ec7e-42b0-8a6d-8839cf023be0", "paytype": "salary" },
    { "id": "11dfb43a-e49f-4e67-b420-75eef54e48df", "paytype": "hourly" },
    { "id": "b6482375-a9b1-4054-a1c5-754e451a9e62", "paytype": "salary" },
    { "id": "0a599a03-5caa-442b-b227-17cc8fd50f81", "paytype": "hourly" },
    { "id": "ccad4dac-939b-4de8-aa51-1fd170557e3c", "paytype": "salary" },
    { "id": "8199dbea-6501-46ba-9144-ea57117eaf29", "paytype": "hourly" },
    { "id": "09cdce59-d407-4821-8288-3ec4a7dbfe63", "paytype": "salary" },
    { "id": "c07b78d0-8e26-4642-8d7a-41a9935cd3f1", "paytype": "hourly" },
    { "id": "746aa57a-e818-4d77-8854-cd8c09ca6746", "paytype": "salary" },
    { "id": "765470d8-6143-4534-ba08-4aa1f678bffd", "paytype": "hourly" },
    { "id": "1e929600-dbe6-45f4-a547-5b131d2a7808", "paytype": "salary" },
    { "id": "dc7e2de2-2236-4be7-af14-1194063f0e61", "paytype": "hourly" },
    { "id": "0a48d15f-e5e4-4b50-ba49-1012eb132cbb", "paytype": "salary" },
    { "id": "96f214f9-e4f7-492e-aec3-2d88644838be", "paytype": "hourly" },
    { "id": "97d3ca37-0eb7-427b-96fd-101db65af105", "paytype": "salary" },
    { "id": "2379da63-20ec-4b06-9928-a351005b5937", "paytype": "hourly" },
    { "id": "a1cb5944-bc05-4f1f-9273-f00bb00d2d70", "paytype": "salary" },
    { "id": "672403f9-a270-4bd5-9b87-adbb16d51ab5", "paytype": "hourly" },
    { "id": "a58e3674-8811-48eb-a90b-8c1ff89ff2b8", "paytype": "salary" },
    { "id": "3e32f6f4-fa9e-441c-8877-d60863131449", "paytype": "hourly" },
    { "id": "ef6a57e7-8b94-4e58-aa6f-cf4602a014d8", "paytype": "salary" },
    { "id": "e9388a08-d4d4-4865-81fd-2b834e0c29e2", "paytype": "hourly" },
    { "id": "c383a955-1172-4727-80cd-cf6dbe9f4451", "paytype": "salary" },
    { "id": "c78745a6-4b97-4b9e-861f-80d1b9b6561a", "paytype": "hourly" },
    { "id": "65b92e1f-a7a0-4876-9cbb-43be88916cd5", "paytype": "salary" },
    { "id": "166815a3-b59e-4cb1-927c-52e807d4e748", "paytype": "hourly" },
    { "id": "ad6100e3-fedd-47ba-ae11-b22966d8bd0d", "paytype": "salary" },
    { "id": "ff39c38c-1ef4-49c2-99f5-6dcd925f2eb3", "paytype": "hourly" },
    { "id": "32ec3997-d3b8-456a-8fbd-99c95e810662", "paytype": "salary" },
    { "id": "50dcda6b-496e-44ed-82dd-f27f06be2989", "paytype": "hourly" },
    { "id": "64a3f187-fa09-4f67-ba5e-9f9e444065c8", "paytype": "salary" },
    { "id": "5bb6dca0-dea2-4dd9-9f2f-2a32f0e419f1", "paytype": "hourly" },
    { "id": "637f8766-2cf0-4e24-9c43-9e875ea2021e", "paytype": "salary" },
    { "id": "fb97e6e9-b4ba-4393-a10e-0103b1521bf9", "paytype": "hourly" },
    { "id": "7b0e133b-1850-4bd7-864c-cb383129ffe6", "paytype": "salary" },
    { "id": "962ad98a-6763-4978-853a-03b3c6c6b5de", "paytype": "hourly" },
    { "id": "54134cd4-a9ef-4f2e-8e74-33ff588e12d8", "paytype": "salary" },
    { "id": "2c639fbe-ef4e-4778-b31c-d94af9885b24", "paytype": "hourly" },
    { "id": "e1030c99-ddab-4c4d-bd8a-0178ab907391", "paytype": "salary" },
    { "id": "f6fa442d-9f43-4270-912b-eb19512c86c0", "paytype": "hourly" },
    { "id": "90b6f49b-7159-4c03-bde6-9737fdf60a8b", "paytype": "salary" },
    { "id": "f90986d2-35ea-445c-a95a-8ba22d8ac2ac", "paytype": "hourly" },
    { "id": "0b1e11ef-a768-4b49-813a-a35b862daceb", "paytype": "salary" },
    { "id": "e461e29b-10c1-48c2-802b-acd9b66eab24", "paytype": "hourly" },
    { "id": "ac92087d-b980-410d-95be-86f649b1859e", "paytype": "salary" },
    { "id": "a886b170-e319-476d-9494-a07d3f78b500", "paytype": "hourly" },
    { "id": "ca164001-9e66-4e53-b832-bd77ebb4d94f", "paytype": "salary" },
    { "id": "769db2c1-549c-4b0c-a3d7-b2401ac92310", "paytype": "hourly" },
    { "id": "dded8869-718e-4ad9-987e-94c564e4c731", "paytype": "salary" },
    { "id": "58758a42-eab2-4808-a362-c9854b3ed65c", "paytype": "hourly" },
    { "id": "fa045083-4975-4cbe-8f97-fc7533f96c05", "paytype": "salary" },
    { "id": "9d45b4e4-876a-48b0-b666-455eaed8bd61", "paytype": "hourly" },
    { "id": "bf8d2ec9-833d-4710-bfca-36a584878440", "paytype": "salary" },
    { "id": "30204286-185b-40c0-910c-4975523cadab", "paytype": "hourly" },
    { "id": "733a4040-70fe-4542-b32d-fbd244c84d58", "paytype": "salary" },
    { "id": "8e52475e-d13d-4027-968c-1f2e80082435", "paytype": "hourly" },
    { "id": "11c32236-c19d-4278-bc8f-cc1a9efb2e8a", "paytype": "salary" },
    { "id": "408ea364-9d1e-4111-a96b-faec8320fe36", "paytype": "hourly" },
    { "id": "17ff21c2-7d4b-4744-8e2b-fefbf6718716", "paytype": "salary" },
    { "id": "75d52437-b7df-4788-9d21-12597e8a1dad", "paytype": "hourly" },
    { "id": "29a26e4f-cabe-447a-aa28-be67b072e999", "paytype": "salary" },
    { "id": "d40a19ba-67c3-4460-9e39-8d69be5d27b6", "paytype": "hourly" },
    { "id": "874e2ab1-6660-46d7-9932-79fecbd66ff0", "paytype": "salary" },
    { "id": "b268c7a8-47ed-447a-93a3-56689af73b54", "paytype": "hourly" },
    { "id": "1d9d1900-7435-4dcd-918b-06feed31d7ba", "paytype": "salary" },
    { "id": "9b2b3e65-92c9-4de3-98fe-ef24a15373ae", "paytype": "hourly" },
    { "id": "9aefc75b-10d2-4d0e-ae56-0e5759b8d9db", "paytype": "salary" },
    { "id": "eeafe587-fd1d-40c3-905c-d691290bffc8", "paytype": "hourly" },
    { "id": "94a4c870-3861-4301-9c83-6c6cb239880d", "paytype": "salary" },
    { "id": "f869b08b-fb39-423c-bca4-cc18f02171a1", "paytype": "hourly" },
    { "id": "7f7c8eb7-715e-4e09-bb13-5323dc100a30", "paytype": "salary" },
    { "id": "55aa5f53-9732-4309-88ef-9abcdd47e033", "paytype": "hourly" },
    { "id": "9e95585c-a947-40b9-b5df-3ce92bbbe103", "paytype": "salary" },
    { "id": "0ea30a14-94c7-4c6a-87df-8878536bf631", "paytype": "hourly" },
    { "id": "9bfcd5e8-0c72-4a49-a641-c7fe155db7e0", "paytype": "salary" },
    { "id": "e0a5938c-9430-4c49-9861-246ed86e42e6", "paytype": "hourly" },
    { "id": "3f85be5d-b2c3-41cc-9224-c1b6d93fa39b", "paytype": "salary" },
    { "id": "069f4a6b-e852-4898-a967-bea1256a498e", "paytype": "hourly" },
    { "id": "daa22aa4-493b-4806-b5ef-1ebdedbe597e", "paytype": "salary" },
    { "id": "b53bcb25-ccc4-4b1f-ba53-e82ff997a9cf", "paytype": "hourly" },
    { "id": "2fd424ae-f245-4f95-89d6-e0a88e149ae1", "paytype": "salary" },
    { "id": "07528a61-9ec4-44b4-b2ea-06c1d63de58b", "paytype": "hourly" },
    { "id": "a8613591-c4c4-4ab8-a817-5af7f892b5c5", "paytype": "salary" },
    { "id": "86dc5a5f-b1c9-4b5f-a297-f5d3c5d0296a", "paytype": "hourly" },
    { "id": "95765172-d659-41f8-99ce-488d093d76cf", "paytype": "salary" },
    { "id": "abe8bd1d-cdf8-4392-855e-c64a64b522cb", "paytype": "hourly" },
    { "id": "f819feb5-0ece-4e46-9ec0-fe5445db987f", "paytype": "salary" },
    { "id": "be93ec07-bfa7-44a7-a1e3-6f3636764afb", "paytype": "hourly" },
    { "id": "56016796-62b1-478c-a040-e2e7064f318b", "paytype": "salary" },
    { "id": "33adca29-0f43-43e2-a5cc-4059c3284863", "paytype": "hourly" },
    { "id": "d0a31dd8-c68d-4156-87c4-a1835f7f632b", "paytype": "salary" },
    { "id": "25706870-a265-4c0a-8570-fe8efeb7c566", "paytype": "hourly" },
    { "id": "671ba3a9-be59-41f0-ab53-84d48691cbfe", "paytype": "salary" },
    { "id": "0916412d-1980-4278-b310-4538a5606ee4", "paytype": "hourly" },
    { "id": "71cbd9ff-f669-4bbe-bf35-8439ba58b6b2", "paytype": "salary" },
    { "id": "ea3d87ca-7920-41fd-b335-cb9a4dc5ebf6", "paytype": "hourly" },
    { "id": "93129c50-80c7-4b90-8997-d6885c29bddb", "paytype": "salary" },
    { "id": "965858aa-1ae5-4855-992e-7b7c18fc7924", "paytype": "hourly" },
    { "id": "7a44be4d-f5c7-4ef5-89fa-5a6a212bf8d0", "paytype": "salary" },
    { "id": "497b95d2-f92e-43d7-9a00-77885d269763", "paytype": "hourly" },
    { "id": "10b7b61b-d826-405e-a97e-52d532f954b6", "paytype": "salary" },
    { "id": "68ac8ded-8b07-4a49-afa7-523a0a11976f", "paytype": "hourly" },
    { "id": "1ecbb5b4-3946-4795-877c-0483e54077f4", "paytype": "salary" },
    { "id": "fbfcebb4-8eff-4a64-aa15-992b1312f875", "paytype": "hourly" },
    { "id": "e827d65a-909c-477d-b49b-732ad73cef87", "paytype": "salary" },
    { "id": "5dcf8ec9-4500-41fb-9d60-f2989faac30a", "paytype": "hourly" },
    { "id": "c8a1cacc-bdd3-4c40-b538-cd323e880064", "paytype": "salary" },
    { "id": "e37297dc-0911-46c1-9072-434047b1b30e", "paytype": "hourly" },
    { "id": "8ed178cf-27ca-4190-acd9-8f274c9e0792", "paytype": "salary" },
    { "id": "f74f7010-2ab8-41ed-af4b-9b313f81d635", "paytype": "hourly" },
    { "id": "66ead90c-ac90-49d4-843d-f80ffc075594", "paytype": "salary" },
    { "id": "42823ef4-e7d9-4092-ba47-2c83db659c15", "paytype": "hourly" },
    { "id": "513eb6a9-4131-4852-9e67-09688d8beaff", "paytype": "salary" },
    { "id": "4148675d-191d-4444-b52a-f4f1645ee383", "paytype": "hourly" },
    { "id": "a4afc4c2-0702-4104-ae33-ff4b95a49d43", "paytype": "salary" },
    { "id": "a794a74e-a027-478a-8da0-80edc1cfc5c3", "paytype": "hourly" },
    { "id": "c336e3e7-2a76-43e5-b46f-a3c28403b395", "paytype": "salary" },
    { "id": "c12c7fb4-0ab5-4302-9af5-c04a19d75d7c", "paytype": "hourly" },
    { "id": "4e8cb7e4-eccc-483f-b8fe-9f1b30b3722e", "paytype": "salary" },
    { "id": "fd96e0f8-fe05-43f1-8210-3929caddf522", "paytype": "hourly" },
    { "id": "4544d6e6-eb24-44a4-96f3-6dce24b8d707", "paytype": "salary" },
    { "id": "37ed7318-54a5-488a-879c-a5381ac9174f", "paytype": "hourly" },
    { "id": "66703193-eda2-42e5-bc7d-e73d6c36ee00", "paytype": "salary" },
    { "id": "ef5295f4-e8a7-43e3-a4c5-a0407f717eab", "paytype": "hourly" },
    { "id": "bc02bab3-9cac-4825-9a30-dd8efc54be6e", "paytype": "salary" },
    { "id": "95f99f21-7066-44d0-b2a8-375e38647a77", "paytype": "hourly" },
    { "id": "b82af60b-04ee-4c1b-a9b9-ae4b0033ad09", "paytype": "salary" },
    { "id": "dc201ab4-8da6-475f-aa6c-a52d5221d345", "paytype": "hourly" },
    { "id": "30b764f7-fd4c-414c-8f30-237575e9b9a8", "paytype": "salary" },
    { "id": "ae6f1949-b363-47a8-a480-8c0762b09d05", "paytype": "hourly" },
    { "id": "60aa7391-e751-4657-a6c4-f09bcf7c10a9", "paytype": "salary" },
    { "id": "ca559a17-c03d-42d0-8087-2084771d5714", "paytype": "hourly" },
    { "id": "f83b8b75-55c9-4256-b73c-d5ee14a89f2b", "paytype": "salary" },
    { "id": "a07fa81d-07ae-49e5-bc71-0bc50878abec", "paytype": "hourly" },
    { "id": "f1374052-5e07-42a5-b688-650ca5bd693b", "paytype": "salary" },
    { "id": "7f9532a3-163b-43a8-8fd2-64315e865fa5", "paytype": "hourly" },
    { "id": "cdc638ca-cddc-46d1-ba9c-c15f9a1c5e79", "paytype": "salary" },
    { "id": "12695aaa-7fad-4d81-b6b7-8b15f3d2667d", "paytype": "hourly" },
    { "id": "a48ea295-0155-42c6-88b6-7a2c4f8cff45", "paytype": "salary" },
    { "id": "77e1cb0c-adfa-4d8e-a826-5cfbd319a9b9", "paytype": "hourly" },
    { "id": "d0a9d373-1d2c-4db3-922b-b3195da7767d", "paytype": "salary" },
    { "id": "57a67419-e789-4bd2-99a2-ca2a7dc9337d", "paytype": "hourly" },
    { "id": "0a439e07-b557-43dd-ad71-c7cd393444ca", "paytype": "salary" },
    { "id": "1c576e5d-a622-42ca-8a46-13a14f0aff60", "paytype": "hourly" },
    { "id": "50fd227a-6178-42fa-8a33-174f179d8fdf", "paytype": "salary" },
    { "id": "0b8ad9fd-6b92-4e07-8d42-ada1c09caaeb", "paytype": "hourly" },
    { "id": "0afc05ff-0f3a-4ca2-8810-1b70b2da22a3", "paytype": "salary" },
    { "id": "9565c144-42be-4f86-9a54-ec819250706b", "paytype": "hourly" },
    { "id": "a36da7f2-5338-404b-9197-8384055a9f01", "paytype": "salary" },
    { "id": "a63f5a44-5166-4835-972d-55c4ee20e41e", "paytype": "hourly" },
    { "id": "d7f78429-10c5-42bd-9f0b-4d20af7ea261", "paytype": "salary" },
    { "id": "8519cdd4-b6af-4a37-bcaa-3fc74578188a", "paytype": "hourly" },
    { "id": "f632a96b-dd81-4a16-b287-b6a201139138", "paytype": "salary" },
    { "id": "43ad7f20-486c-4014-8487-dbee544ea467", "paytype": "hourly" },
    { "id": "369dc231-fee4-490f-b2e1-fea695cc535f", "paytype": "salary" },
    { "id": "42c5ec46-3009-4f7d-b9c8-d30a01fa5099", "paytype": "hourly" },
    { "id": "59397518-bf48-4f1a-a402-6d648a574743", "paytype": "salary" },
    { "id": "b8cb794c-d4f0-4a56-bcdf-1f59ce288fbb", "paytype": "hourly" },
    { "id": "accfda91-cb96-4e8d-bddf-3949c5aad617", "paytype": "salary" },
    { "id": "40195622-908f-4bea-958d-42c1cecb4c51", "paytype": "hourly" },
    { "id": "119b6595-4e2f-4bb5-95b9-b13d6a83d21a", "paytype": "salary" },
    { "id": "3ef00917-d5bb-4e85-a6b4-1cbd8ca5c460", "paytype": "hourly" },
    { "id": "12f19133-fcdf-43c1-a017-73efd02286dc", "paytype": "salary" },
    { "id": "59159ffd-5d4e-4f83-88f0-8100563fdba2", "paytype": "hourly" },
    { "id": "696742b1-04c7-41cf-a031-d4ee7edcdf9e", "paytype": "salary" },
    { "id": "1ef4d6a8-61fb-4d46-84c0-3b06ad22ebb8", "paytype": "hourly" },
    { "id": "ec6fb29a-860a-4173-ae1c-c37d799b1d15", "paytype": "salary" },
    { "id": "a4119362-c46e-4dc2-b9cf-78c15f6851aa", "paytype": "hourly" },
    { "id": "a4779f9b-4164-4b2b-990c-dbc5abc1f5ef", "paytype": "salary" },
    { "id": "d3307465-2e2d-47b9-b660-2f4dc28b7dd9", "paytype": "hourly" },
    { "id": "ef073b9d-9caa-4b03-b6cf-b8d0f870ef8e", "paytype": "salary" },
    { "id": "03e965ec-f1c8-43c2-bdcc-03eb7b0b267a", "paytype": "hourly" },
    { "id": "bb2c5df1-21db-4413-96c9-c5f1d3133d23", "paytype": "salary" },
    { "id": "82743aec-1708-470f-b582-f7a92b7dc24f", "paytype": "hourly" },
    { "id": "a5d0cde0-8373-4652-86de-105a8e384d2a", "paytype": "salary" },
    { "id": "c05bf5fc-e7c0-49ab-92ed-3a2aa962d040", "paytype": "hourly" },
    { "id": "c7214a19-beea-4fb6-b908-c4a1ee7f430b", "paytype": "salary" },
    { "id": "67980d08-62fd-4007-b59e-ba3c6103d31a", "paytype": "hourly" },
    { "id": "48b0f649-0187-4b7a-8be3-addd0aec9b53", "paytype": "salary" },
    { "id": "b90d33ed-4059-40a2-bddb-c6dc4ce4c0ac", "paytype": "hourly" },
    { "id": "ed60e484-3d9f-4ae6-8466-aece06f14665", "paytype": "salary" },
    { "id": "5d2d85e1-0dd3-4b99-a5f4-f219ebb096cb", "paytype": "hourly" },
    { "id": "6654c24b-39e5-4d50-833e-0f4b0da5f621", "paytype": "salary" },
    { "id": "b76fa280-c47d-4f35-99b2-92fd6376fa61", "paytype": "hourly" },
    { "id": "e2863ae0-41c6-444f-b967-c7a6ae2a614c", "paytype": "salary" },
    { "id": "8904adc0-06a3-40b0-aa77-4022321c9e71", "paytype": "hourly" },
    { "id": "c7be92c8-bee8-4a78-b026-dddf97c27870", "paytype": "salary" },
    { "id": "b0bf1570-c3d0-4ac9-be82-8a7d112c50e3", "paytype": "hourly" },
    { "id": "179d3a3b-780f-4c1f-94e2-8588f458205f", "paytype": "salary" },
    { "id": "105761c9-fae2-4461-b54b-fcf4a647c1a1", "paytype": "hourly" },
    { "id": "9d7acf44-4498-4505-bef1-7940d5135342", "paytype": "salary" },
    { "id": "417b0737-b23e-496c-9312-4c35ec8e4510", "paytype": "hourly" },
    { "id": "2350f079-169d-4a18-86cb-af9d1dffaa6f", "paytype": "salary" },
    { "id": "381ca7a8-411d-4dc4-87a1-5eecc1912868", "paytype": "hourly" },
    { "id": "2c25fd79-a8a7-46a8-8922-2124b4f34994", "paytype": "salary" },
    { "id": "f2a633fd-7ba2-471f-a849-dcc37e59ff39", "paytype": "hourly" },
    { "id": "883e108d-b2a3-4608-a215-e34a40991f58", "paytype": "salary" },
    { "id": "7a0497a0-b2f7-4e13-a7ac-51ac1e536dc1", "paytype": "hourly" },
    { "id": "de842876-c39b-40f1-9829-d1073d9d2f1a", "paytype": "salary" },
    { "id": "7b5c1b78-1a01-4a0d-86e9-ab4ab6418591", "paytype": "hourly" },
    { "id": "037e3e1e-5884-4d87-a722-93a3bbf09ba6", "paytype": "salary" },
    { "id": "468082b5-f062-4417-9574-118d5ae9522a", "paytype": "hourly" },
    { "id": "4c7170e6-4296-4902-9286-3975598465e1", "paytype": "salary" },
    { "id": "ccecb4d4-9108-4b31-be79-4ac163fbbc36", "paytype": "hourly" },
    { "id": "254e76b5-7605-4f72-ab34-e1ab2dedfb84", "paytype": "salary" },
    { "id": "0dabd336-6ec3-4ccb-9f72-d1d4823f1381", "paytype": "hourly" },
    { "id": "929da6f2-a1fe-4c55-84c7-122e03224286", "paytype": "salary" },
    { "id": "417f0fe7-68f2-4115-99dc-633ba59a2b7d", "paytype": "hourly" },
    { "id": "5e23e633-ded1-45a0-8915-a9de9dc8e800", "paytype": "salary" },
    { "id": "eca94e1a-ea5a-4d61-8f23-8dfc4c81728c", "paytype": "hourly" },
    { "id": "49fa3abe-bd9d-4219-82e6-29df692df841", "paytype": "salary" },
    { "id": "2c399928-c0d7-4029-86b1-972f93fd472b", "paytype": "hourly" },
    { "id": "1f59a1fe-70f3-43a9-9622-bd0b30103fde", "paytype": "salary" },
    { "id": "dff1f32c-1032-456f-b332-09a9f60a0747", "paytype": "hourly" },
    { "id": "9a59a357-7ddf-472a-af0b-52b681d3a035", "paytype": "salary" },
    { "id": "280b47b8-6966-4827-a97b-a5321421417f", "paytype": "hourly" },
    { "id": "32696cfe-27a1-417e-8785-c63cf43e482c", "paytype": "salary" },
    { "id": "4ecb3bf1-9f79-48c9-b0a4-1f9cd90b0a26", "paytype": "hourly" },
    { "id": "5df18ebb-466d-4f4e-850b-0db51fd5a3de", "paytype": "salary" },
    { "id": "46f64459-c77f-4f53-9214-d914b3feef7b", "paytype": "hourly" },
    { "id": "43d2fc1a-498a-4e7e-a7a0-761c653eb6d1", "paytype": "salary" },
    { "id": "1bd77768-95d8-4a7d-87c9-2c64612a227a", "paytype": "hourly" },
    { "id": "a8a7d2ac-1961-4950-bedc-0ed28f380cd1", "paytype": "salary" },
    { "id": "492efb49-2830-4ac3-a766-20f393e93736", "paytype": "hourly" },
    { "id": "42f7a7a5-5813-461d-8bd1-6650dde8b264", "paytype": "salary" },
    { "id": "92a8f6a4-40bc-4b7b-b473-81fbfe06ee55", "paytype": "hourly" },
    { "id": "3af138de-17a2-49c3-b29e-0b4d910fa364", "paytype": "salary" },
    { "id": "29fb3d45-040d-4c02-85a9-8f507a3c1146", "paytype": "hourly" },
    { "id": "06bacdce-3fb7-4e9c-8108-f3dc3f0dcc28", "paytype": "salary" },
    { "id": "6e3a657b-5ee5-405b-af14-5368a3d4b31c", "paytype": "hourly" },
    { "id": "3a58a511-79ec-4d9c-b72f-16413eb37f7d", "paytype": "salary" },
    { "id": "147638ea-c0c0-4f21-a107-408cd4975480", "paytype": "hourly" },
    { "id": "12fcec2c-fbc5-43bc-922a-e53125ced184", "paytype": "salary" },
    { "id": "54edb272-5167-4b5f-aab9-d274d3cef303", "paytype": "hourly" },
    { "id": "de1fdc27-84b2-4632-9c6d-1965751116d8", "paytype": "salary" },
    { "id": "2da839da-1faa-4e3c-acc2-4f347c7c43f6", "paytype": "hourly" },
    { "id": "7a1514be-7b7f-47ce-8eb8-4f385f01c3f1", "paytype": "salary" },
    { "id": "c1e2d3d6-7f1d-481c-8003-66ad9fbb6f3f", "paytype": "hourly" },
    { "id": "a94527eb-1cda-4e1b-8ad6-ba86bb3b601f", "paytype": "salary" },
    { "id": "66f46543-c849-4b91-8739-bc1077a40fc8", "paytype": "hourly" },
    { "id": "d40a0204-650a-40f2-afae-323d47b27dd9", "paytype": "salary" },
    { "id": "3c314a52-421e-40a7-8526-1e595c7234e9", "paytype": "hourly" },
    { "id": "d567aa39-e599-4297-a38f-fa6430795733", "paytype": "salary" },
    { "id": "c98e5539-4c12-4afe-bd30-335b23793fd8", "paytype": "hourly" },
    { "id": "56282099-8e58-4bf0-a643-6f77a3ca75fc", "paytype": "salary" },
    { "id": "e7f82031-4edb-43c6-af5e-81f056c007c1", "paytype": "hourly" },
    { "id": "e062960a-68a2-4f58-9302-1a359143443c", "paytype": "salary" },
    { "id": "71bfe115-7f78-4b3c-9653-836d7cfb7c28", "paytype": "hourly" },
    { "id": "e10966f4-1c93-441d-bbb9-283b24329992", "paytype": "salary" },
    { "id": "f020f84f-a152-4859-82b2-41902b16fdba", "paytype": "hourly" },
    { "id": "1b13eb0a-6793-4093-93d4-e862b71c1179", "paytype": "salary" },
    { "id": "64950f38-cdac-4e16-be9a-7df96310817c", "paytype": "hourly" },
    { "id": "ecf9bc97-8deb-4f78-babd-5df2fda254a9", "paytype": "salary" },
    { "id": "a0882676-66f2-4754-be6d-066eabddbcae", "paytype": "hourly" },
    { "id": "835bc9bf-9b9c-4093-a86e-f5bdd9c96841", "paytype": "salary" },
    { "id": "d1be85e9-3c92-4f44-bb84-3ab4674536f6", "paytype": "hourly" },
    { "id": "39bd3de6-6315-4b50-98ae-1621c71b675d", "paytype": "salary" },
    { "id": "162ce33e-ce66-4cf8-aeef-48188b134d2c", "paytype": "hourly" },
    { "id": "000f2ec3-0316-4bc5-83f5-d3918fa2a33a", "paytype": "salary" },
    { "id": "f702040d-3be9-46b8-b038-c983af068e5f", "paytype": "hourly" },
    { "id": "4cdeb8ea-80e4-4cc7-abe9-bf871d52f095", "paytype": "salary" },
    { "id": "07244816-aaaf-497d-8e61-3343c92e0298", "paytype": "hourly" },
    { "id": "679f0b26-d3cb-41a5-99aa-e21d0fab33ed", "paytype": "salary" },
    { "id": "5980ec37-1c4e-435e-8d2a-49b8477f0e21", "paytype": "hourly" },
    { "id": "c35a589d-f9d5-4f02-b014-6e4c6624026d", "paytype": "salary" },
    { "id": "24baa454-4986-49a5-8d30-26c18597922a", "paytype": "hourly" },
    { "id": "cfa75024-cecd-4871-8704-372a82f67e70", "paytype": "salary" },
    { "id": "f9d82083-01e3-466a-901e-689832b7e8a6", "paytype": "hourly" },
    { "id": "ae06730b-f9c7-4908-910a-7a5e49d076ae", "paytype": "salary" },
    { "id": "82c2ce2e-13ec-4363-925a-d6af840e76ff", "paytype": "hourly" },
    { "id": "8936c582-6f93-46af-866d-1ef846eee247", "paytype": "salary" },
    { "id": "2ddf4e16-1592-4697-bbf8-f4ee75a4b1e6", "paytype": "hourly" },
    { "id": "de22c198-2c34-4c87-8250-2efca2defb88", "paytype": "salary" },
    { "id": "084a45d7-d150-468c-8ebb-b8010f4847e8", "paytype": "hourly" },
    { "id": "b61c041a-8dee-4123-84d6-139ec0b85e09", "paytype": "salary" },
    { "id": "37f8b815-2370-4f2f-915f-e29c6d861501", "paytype": "hourly" },
    { "id": "c3346c17-1ee1-4f31-a12e-b5fa933bcd5c", "paytype": "salary" },
    { "id": "d83c81d4-bd65-44d3-a7e3-7f79db46fb84", "paytype": "hourly" },
    { "id": "2bb9cce5-d374-403d-b31f-fca7e996dc77", "paytype": "salary" },
    { "id": "f7bd98a4-5218-4fa5-9ee4-8f1007f70ccb", "paytype": "hourly" },
    { "id": "ab4bb066-6f82-4c36-9c0f-63b46a297eed", "paytype": "salary" },
    { "id": "9199a939-5270-4cdb-87a6-e270c6684a26", "paytype": "hourly" },
    { "id": "3426fda3-89dd-43ba-a384-3f062b954d54", "paytype": "salary" },
    { "id": "dd84ebbf-d7b5-4ac9-abe3-26c13ead95fa", "paytype": "hourly" },
    { "id": "8448c646-dd3e-43bc-8528-8cb24ae2f1c8", "paytype": "salary" },
    { "id": "abae4e07-22df-4554-8457-72bb8b52451d", "paytype": "hourly" },
    { "id": "94a31d9e-1c68-46c0-a03a-9c4e6876b894", "paytype": "salary" },
    { "id": "3bb163e8-1207-42e6-b54e-ec7820a86b5c", "paytype": "hourly" },
    { "id": "6ff58f92-7089-4e5c-8085-f8a2edb248fc", "paytype": "salary" },
    { "id": "414c1d21-1ec5-48a5-bf7d-b1c46cca128b", "paytype": "hourly" },
    { "id": "34033bcf-a570-4a2e-91ee-ad5138e3154a", "paytype": "salary" },
    { "id": "d0dfd812-81f2-4a41-b898-a04188b2fe96", "paytype": "hourly" },
    { "id": "8f7f944a-9c52-45a6-8192-0a64bf5245e4", "paytype": "salary" },
    { "id": "6004bbb0-7e95-480d-a67c-5c9df2b896fa", "paytype": "hourly" },
    { "id": "a50155e6-dd5a-48a2-a1be-38c97190c45d", "paytype": "salary" },
    { "id": "4e52640b-28e5-4440-8252-9c0aafaf3c8b", "paytype": "hourly" },
    { "id": "a604851e-012b-46d3-855a-d005fa9e7fd0", "paytype": "salary" },
    { "id": "794f9750-6521-42e0-979e-140c5bacb214", "paytype": "hourly" },
    { "id": "7fe1bf63-5df2-4988-9213-9739be70b079", "paytype": "salary" },
    { "id": "29b94cea-3632-40d2-8474-8a6f68c70f89", "paytype": "hourly" },
    { "id": "e847285e-3cdc-4803-8646-fa0c14c831cb", "paytype": "salary" },
    { "id": "ea9cd5b3-78c0-4e3a-929b-30e4d422a4f5", "paytype": "hourly" },
    { "id": "a4030623-cf79-4230-9efb-34a3f2a26a9e", "paytype": "salary" },
    { "id": "9ab335f1-eee6-4353-bdaf-2a12f1d89135", "paytype": "hourly" },
    { "id": "4d08a25f-ceed-4c52-91c9-0bc3da6ef506", "paytype": "salary" },
    { "id": "c7165e09-1d2a-4409-add2-42b42fff8fba", "paytype": "hourly" },
    { "id": "8aab20c2-04fc-4dbd-8b9f-09d19be371fd", "paytype": "salary" },
    { "id": "41884444-7df5-4dd5-a642-a3544a741b19", "paytype": "hourly" },
    { "id": "b957f305-2d93-4db1-bf1c-1237b307282d", "paytype": "salary" },
    { "id": "171605d7-a6d6-475f-94c5-d613a182030c", "paytype": "hourly" },
    { "id": "06c11576-2bc2-43fa-9254-a373c9e6b76b", "paytype": "salary" },
    { "id": "f206811f-c102-4e6b-8f63-3645d6a7341d", "paytype": "hourly" },
    { "id": "dab1242a-1465-428b-8f2c-da310574c631", "paytype": "salary" },
    { "id": "31550dfc-11f1-481e-842b-8d3d5d97b976", "paytype": "hourly" },
    { "id": "70ee9ebd-326a-43f0-a856-c237a26cba93", "paytype": "salary" },
    { "id": "0d309b4f-49c4-4301-a33d-3ff8bdaca199", "paytype": "hourly" },
    { "id": "2c6c51d3-a833-443e-a7ff-fa951ffeec5d", "paytype": "salary" },
    { "id": "1e4f9b6c-8ebe-4c70-afc9-2792f87c39f1", "paytype": "hourly" },
    { "id": "5867ff60-2634-4d49-995b-c561e3ed9c51", "paytype": "salary" },
    { "id": "0c16f0b0-a430-4604-9f99-73aed2d44077", "paytype": "hourly" },
    { "id": "2b319311-de39-485b-a7d6-d480e864abdd", "paytype": "salary" },
    { "id": "b1ef7efc-159c-482c-8bd3-b2d0c79c483a", "paytype": "hourly" },
    { "id": "0de10e6a-e187-4ab2-8785-dead9014ce65", "paytype": "salary" },
    { "id": "b8f89064-d57f-4e7e-bc42-1dd67b1a8379", "paytype": "hourly" },
    { "id": "1c6ca45d-61bc-4437-b0b0-dfd4f04719b7", "paytype": "salary" },
    { "id": "e4510bf2-67a2-434f-b398-22afd01bd6ee", "paytype": "hourly" },
    { "id": "c258fa5d-0260-4342-828d-42bfdc10684d", "paytype": "salary" },
    { "id": "2cc44eda-db7f-48f7-81e2-046ec6deca90", "paytype": "hourly" },
    { "id": "a070ca2e-3b2a-49a9-bc82-2f4401cf258a", "paytype": "salary" },
    { "id": "d8962e3e-4852-42bb-9172-d972bc87548f", "paytype": "hourly" },
    { "id": "261f5ef7-2903-483c-b31e-a363eebca9ad", "paytype": "salary" },
    { "id": "2dd262d4-23d6-4cb7-aad4-7bed78b9eb3f", "paytype": "hourly" },
    { "id": "80edfc99-9e5d-4c93-b3d4-39d3460ca918", "paytype": "salary" },
    { "id": "3217432c-5399-48fd-9197-4bd250fe6140", "paytype": "hourly" },
    { "id": "33adca97-8051-45e7-98fe-efe8abdbf028", "paytype": "salary" },
    { "id": "ea1c7787-391a-4369-b35d-291ee9e16b5e", "paytype": "hourly" },
    { "id": "8912209c-b6a8-4358-b61a-84f4928a3d5b", "paytype": "salary" },
    { "id": "8050e787-b68a-4a41-94bd-96330eb04610", "paytype": "hourly" },
    { "id": "e119899e-fba2-438a-9084-5e9d961d47f6", "paytype": "salary" },
    { "id": "eecf9946-a617-4b5a-a432-39af4f4a2d92", "paytype": "hourly" },
    { "id": "45dfe057-9417-4cf8-b1ee-5e11eb9b370b", "paytype": "salary" },
    { "id": "711b5b77-e6b0-4b13-9286-67b3c7912483", "paytype": "hourly" },
    { "id": "01f968cf-6216-46c1-b04c-530b0e1cb8c0", "paytype": "salary" },
    { "id": "388b6d51-de09-4213-843b-cea7b7ccdec9", "paytype": "hourly" },
    { "id": "04c3e8cd-aacf-4042-8ad8-bb217233363c", "paytype": "salary" },
    { "id": "28c1ee92-ce36-48b0-9a0c-e2e6f97092be", "paytype": "hourly" },
    { "id": "36908f17-3373-4a0e-ab71-6e5228fde462", "paytype": "salary" },
    { "id": "0adc24d4-c4b3-4836-bad4-be34c0854fd5", "paytype": "hourly" },
    { "id": "1856aa52-3444-4a5f-b5b1-0fe5a1733a6a", "paytype": "salary" },
    { "id": "851d4969-4ca4-4eab-9963-647cf9267e38", "paytype": "hourly" },
    { "id": "af8bbea1-77f5-496e-a429-a79445d937c2", "paytype": "salary" },
    { "id": "5149a73a-fa59-4353-a547-5d5a7bcc2625", "paytype": "hourly" },
    { "id": "dcf8ac92-1f9f-48f6-b07b-6fbcce667065", "paytype": "salary" },
    { "id": "f9156ddc-c40c-4f3f-82c8-7b4e21c4a668", "paytype": "hourly" },
    { "id": "ba04e46f-0d04-41cd-818b-39987a26eb63", "paytype": "salary" },
    { "id": "b9efb5d2-4706-4229-a140-21c20057d01a", "paytype": "hourly" },
    { "id": "139389fe-d0bb-4590-8392-427583c99f57", "paytype": "salary" },
    { "id": "56dcbd54-cecf-4cd9-a2ab-9309cf1dadc7", "paytype": "hourly" },
    { "id": "437b9e28-89bb-4381-aeee-3b0c6922ca51", "paytype": "salary" },
    { "id": "96005cda-24ea-4611-b5a8-e30ebbc5f435", "paytype": "hourly" },
    { "id": "d1158233-6c11-4191-8768-2e097ee77698", "paytype": "salary" },
    { "id": "5130f5c8-0670-49de-b13d-c144ab89fee0", "paytype": "hourly" },
    { "id": "83ecff24-70dd-40d0-93d4-7ddc29cc9c20", "paytype": "salary" },
    { "id": "51a2b86c-d2c3-41a4-88bd-1a32f54c0573", "paytype": "hourly" },
    { "id": "c92c498a-330a-4ad9-96b7-5d0531cd628e", "paytype": "salary" },
    { "id": "4e1ddab2-4ec5-4b6a-87c9-782de28756e2", "paytype": "hourly" },
    { "id": "9e968444-f55f-40e7-973f-e6e0d890cd53", "paytype": "salary" },
    { "id": "e81a4d85-e519-4eca-8c15-835efe5f4411", "paytype": "hourly" },
    { "id": "e07af056-394d-4fa8-a22e-3d02dc76efb9", "paytype": "salary" },
    { "id": "d60c347a-16f8-4d93-8af4-9a917582cc50", "paytype": "hourly" },
    { "id": "29f1d9df-0459-4111-9f4c-fe6f55608151", "paytype": "salary" },
    { "id": "c73e86a8-7828-49a4-a466-db7f6d327c65", "paytype": "hourly" },
    { "id": "ec10251e-9966-48f1-841f-00e784c5c0bc", "paytype": "salary" },
    { "id": "4201f5a6-67f2-43d0-83d3-317440ed1d0a", "paytype": "hourly" },
    { "id": "c59a71ad-4fd2-4e97-9ea8-89157a89b145", "paytype": "salary" },
    { "id": "b55e6de3-4f69-41ed-9508-b2e807ded81c", "paytype": "hourly" },
    { "id": "b6a8d779-9e83-491b-b655-b2c8a69ab9ff", "paytype": "salary" },
    { "id": "b1e7f944-643f-4e83-9bbd-0e970abd0a3a", "paytype": "hourly" },
    { "id": "79a000d4-4049-4dc0-b3a0-8eab152fc9d1", "paytype": "salary" },
    { "id": "c5f00f27-da4e-485a-88ee-14cff891445a", "paytype": "hourly" },
    { "id": "73981dec-29fa-43d8-8d6f-3258f92471b5", "paytype": "salary" },
    { "id": "eeff477f-4061-4741-89d8-31f3d41cd779", "paytype": "hourly" },
    { "id": "748c652e-9eec-433b-ae46-ba2a03cfefaf", "paytype": "salary" },
    { "id": "d0c4098c-f627-4678-8439-59bb9e7fcf63", "paytype": "hourly" },
    { "id": "1b05690e-c949-4524-8c30-c20cd50c075a", "paytype": "salary" },
    { "id": "151a149b-8788-4eca-b4d2-c7d5cd410d67", "paytype": "hourly" },
    { "id": "a755f340-6b5c-40e8-ae21-e48d8901296f", "paytype": "salary" },
    { "id": "9c06228b-7f93-4bb0-a89c-1da293227433", "paytype": "hourly" },
    { "id": "af9727e6-fa24-4cf8-8790-1e72b8c1bf21", "paytype": "salary" },
    { "id": "a9b8844b-a9f4-41bd-803e-40a6111eee4d", "paytype": "hourly" },
    { "id": "4b225981-ffd1-413a-b86d-4d4a8f24162c", "paytype": "salary" },
    { "id": "0c173e38-48a4-4d1e-87ee-53e3afe24e85", "paytype": "hourly" },
    { "id": "119c3169-a93b-400d-84ea-3964f4ffbf8c", "paytype": "salary" },
    { "id": "747d53e7-aca8-4f38-9930-dcae79101802", "paytype": "hourly" },
    { "id": "f6f1d5ef-3944-4f4f-b833-c77370c3b6b2", "paytype": "salary" },
    { "id": "607f6707-2096-40c2-9e59-33067c55417d", "paytype": "hourly" },
    { "id": "cde3f8ff-391d-4a55-8b47-c8eba81c7b64", "paytype": "salary" },
    { "id": "c6c8d966-830f-4085-916e-215eca55b500", "paytype": "hourly" },
    { "id": "e9cb30e4-6dbe-479d-8e27-c90af323fdf9", "paytype": "salary" },
    { "id": "5392897a-c389-4dfc-ae89-9687e89acc41", "paytype": "hourly" },
    { "id": "4f935c22-24ca-4a46-976b-d7336c4f1472", "paytype": "salary" }]

export { IPaytype, paytypes };