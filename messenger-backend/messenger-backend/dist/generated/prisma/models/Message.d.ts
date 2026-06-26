import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>;
export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
export type MessageAvgAggregateOutputType = {
    id: number | null;
    parentId: number | null;
};
export type MessageSumAggregateOutputType = {
    id: number | null;
    parentId: number | null;
};
export type MessageMinAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    content: string | null;
    userId: string | null;
    parentId: number | null;
};
export type MessageMaxAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    content: string | null;
    userId: string | null;
    parentId: number | null;
};
export type MessageCountAggregateOutputType = {
    id: number;
    createdAt: number;
    content: number;
    userId: number;
    parentId: number;
    _all: number;
};
export type MessageAvgAggregateInputType = {
    id?: true;
    parentId?: true;
};
export type MessageSumAggregateInputType = {
    id?: true;
    parentId?: true;
};
export type MessageMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    content?: true;
    userId?: true;
    parentId?: true;
};
export type MessageMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    content?: true;
    userId?: true;
    parentId?: true;
};
export type MessageCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    content?: true;
    userId?: true;
    parentId?: true;
    _all?: true;
};
export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageCountAggregateInputType;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessage[P]> : Prisma.GetScalarType<T[P], AggregateMessage[P]>;
};
export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithAggregationInput | Prisma.MessageOrderByWithAggregationInput[];
    by: Prisma.MessageScalarFieldEnum[] | Prisma.MessageScalarFieldEnum;
    having?: Prisma.MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type MessageGroupByOutputType = {
    id: number;
    createdAt: Date;
    content: string;
    userId: string;
    parentId: number | null;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
export type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>;
}>>;
export type MessageWhereInput = {
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    id?: Prisma.IntFilter<"Message"> | number;
    createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string;
    content?: Prisma.StringFilter<"Message"> | string;
    userId?: Prisma.StringFilter<"Message"> | string;
    parentId?: Prisma.IntNullableFilter<"Message"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    children?: Prisma.MessageListRelationFilter;
    parent?: Prisma.XOR<Prisma.MessageNullableScalarRelationFilter, Prisma.MessageWhereInput> | null;
};
export type MessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    children?: Prisma.MessageOrderByRelationAggregateInput;
    parent?: Prisma.MessageOrderByWithRelationInput;
};
export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string;
    content?: Prisma.StringFilter<"Message"> | string;
    userId?: Prisma.StringFilter<"Message"> | string;
    parentId?: Prisma.IntNullableFilter<"Message"> | number | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    children?: Prisma.MessageListRelationFilter;
    parent?: Prisma.XOR<Prisma.MessageNullableScalarRelationFilter, Prisma.MessageWhereInput> | null;
}, "id">;
export type MessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MessageCountOrderByAggregateInput;
    _avg?: Prisma.MessageAvgOrderByAggregateInput;
    _max?: Prisma.MessageMaxOrderByAggregateInput;
    _min?: Prisma.MessageMinOrderByAggregateInput;
    _sum?: Prisma.MessageSumOrderByAggregateInput;
};
export type MessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Message"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Message"> | Date | string;
    content?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    parentId?: Prisma.IntNullableWithAggregatesFilter<"Message"> | number | null;
};
export type MessageCreateInput = {
    createdAt?: Date | string;
    content: string;
    user: Prisma.UserCreateNestedOneWithoutMessagesInput;
    children?: Prisma.MessageCreateNestedManyWithoutParentInput;
    parent?: Prisma.MessageCreateNestedOneWithoutChildrenInput;
};
export type MessageUncheckedCreateInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    userId: string;
    parentId?: number | null;
    children?: Prisma.MessageUncheckedCreateNestedManyWithoutParentInput;
};
export type MessageUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    children?: Prisma.MessageUpdateManyWithoutParentNestedInput;
    parent?: Prisma.MessageUpdateOneWithoutChildrenNestedInput;
};
export type MessageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    children?: Prisma.MessageUncheckedUpdateManyWithoutParentNestedInput;
};
export type MessageCreateManyInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    userId: string;
    parentId?: number | null;
};
export type MessageUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MessageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MessageListRelationFilter = {
    every?: Prisma.MessageWhereInput;
    some?: Prisma.MessageWhereInput;
    none?: Prisma.MessageWhereInput;
};
export type MessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessageNullableScalarRelationFilter = {
    is?: Prisma.MessageWhereInput | null;
    isNot?: Prisma.MessageWhereInput | null;
};
export type MessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type MessageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type MessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type MessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type MessageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type MessageCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput> | Prisma.MessageCreateWithoutUserInput[] | Prisma.MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutUserInput | Prisma.MessageCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MessageCreateManyUserInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput> | Prisma.MessageCreateWithoutUserInput[] | Prisma.MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutUserInput | Prisma.MessageCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MessageCreateManyUserInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput> | Prisma.MessageCreateWithoutUserInput[] | Prisma.MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutUserInput | Prisma.MessageCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutUserInput | Prisma.MessageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MessageCreateManyUserInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutUserInput | Prisma.MessageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutUserInput | Prisma.MessageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput> | Prisma.MessageCreateWithoutUserInput[] | Prisma.MessageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutUserInput | Prisma.MessageCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutUserInput | Prisma.MessageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MessageCreateManyUserInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutUserInput | Prisma.MessageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutUserInput | Prisma.MessageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput> | Prisma.MessageCreateWithoutParentInput[] | Prisma.MessageUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutParentInput | Prisma.MessageCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.MessageCreateManyParentInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutChildrenInput, Prisma.MessageUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.MessageWhereUniqueInput;
};
export type MessageUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput> | Prisma.MessageCreateWithoutParentInput[] | Prisma.MessageUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutParentInput | Prisma.MessageCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.MessageCreateManyParentInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput> | Prisma.MessageCreateWithoutParentInput[] | Prisma.MessageUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutParentInput | Prisma.MessageCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutParentInput | Prisma.MessageUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.MessageCreateManyParentInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutParentInput | Prisma.MessageUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutParentInput | Prisma.MessageUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutChildrenInput, Prisma.MessageUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.MessageUpsertWithoutChildrenInput;
    disconnect?: Prisma.MessageWhereInput | boolean;
    delete?: Prisma.MessageWhereInput | boolean;
    connect?: Prisma.MessageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MessageUpdateToOneWithWhereWithoutChildrenInput, Prisma.MessageUpdateWithoutChildrenInput>, Prisma.MessageUncheckedUpdateWithoutChildrenInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MessageUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput> | Prisma.MessageCreateWithoutParentInput[] | Prisma.MessageUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutParentInput | Prisma.MessageCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutParentInput | Prisma.MessageUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.MessageCreateManyParentInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutParentInput | Prisma.MessageUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutParentInput | Prisma.MessageUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageCreateWithoutUserInput = {
    createdAt?: Date | string;
    content: string;
    children?: Prisma.MessageCreateNestedManyWithoutParentInput;
    parent?: Prisma.MessageCreateNestedOneWithoutChildrenInput;
};
export type MessageUncheckedCreateWithoutUserInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    parentId?: number | null;
    children?: Prisma.MessageUncheckedCreateNestedManyWithoutParentInput;
};
export type MessageCreateOrConnectWithoutUserInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput>;
};
export type MessageCreateManyUserInputEnvelope = {
    data: Prisma.MessageCreateManyUserInput | Prisma.MessageCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutUserInput, Prisma.MessageUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutUserInput, Prisma.MessageUncheckedCreateWithoutUserInput>;
};
export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutUserInput, Prisma.MessageUncheckedUpdateWithoutUserInput>;
};
export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutUserInput>;
};
export type MessageScalarWhereInput = {
    AND?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    OR?: Prisma.MessageScalarWhereInput[];
    NOT?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    id?: Prisma.IntFilter<"Message"> | number;
    createdAt?: Prisma.DateTimeFilter<"Message"> | Date | string;
    content?: Prisma.StringFilter<"Message"> | string;
    userId?: Prisma.StringFilter<"Message"> | string;
    parentId?: Prisma.IntNullableFilter<"Message"> | number | null;
};
export type MessageCreateWithoutParentInput = {
    createdAt?: Date | string;
    content: string;
    user: Prisma.UserCreateNestedOneWithoutMessagesInput;
    children?: Prisma.MessageCreateNestedManyWithoutParentInput;
};
export type MessageUncheckedCreateWithoutParentInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    userId: string;
    children?: Prisma.MessageUncheckedCreateNestedManyWithoutParentInput;
};
export type MessageCreateOrConnectWithoutParentInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput>;
};
export type MessageCreateManyParentInputEnvelope = {
    data: Prisma.MessageCreateManyParentInput | Prisma.MessageCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateWithoutChildrenInput = {
    createdAt?: Date | string;
    content: string;
    user: Prisma.UserCreateNestedOneWithoutMessagesInput;
    parent?: Prisma.MessageCreateNestedOneWithoutChildrenInput;
};
export type MessageUncheckedCreateWithoutChildrenInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    userId: string;
    parentId?: number | null;
};
export type MessageCreateOrConnectWithoutChildrenInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutChildrenInput, Prisma.MessageUncheckedCreateWithoutChildrenInput>;
};
export type MessageUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutParentInput, Prisma.MessageUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutParentInput, Prisma.MessageUncheckedCreateWithoutParentInput>;
};
export type MessageUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutParentInput, Prisma.MessageUncheckedUpdateWithoutParentInput>;
};
export type MessageUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutParentInput>;
};
export type MessageUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.MessageUpdateWithoutChildrenInput, Prisma.MessageUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutChildrenInput, Prisma.MessageUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.MessageWhereInput;
};
export type MessageUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.MessageWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutChildrenInput, Prisma.MessageUncheckedUpdateWithoutChildrenInput>;
};
export type MessageUpdateWithoutChildrenInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    parent?: Prisma.MessageUpdateOneWithoutChildrenNestedInput;
};
export type MessageUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MessageCreateManyUserInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    parentId?: number | null;
};
export type MessageUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    children?: Prisma.MessageUpdateManyWithoutParentNestedInput;
    parent?: Prisma.MessageUpdateOneWithoutChildrenNestedInput;
};
export type MessageUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    children?: Prisma.MessageUncheckedUpdateManyWithoutParentNestedInput;
};
export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MessageCreateManyParentInput = {
    id?: number;
    createdAt?: Date | string;
    content: string;
    userId: string;
};
export type MessageUpdateWithoutParentInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    children?: Prisma.MessageUpdateManyWithoutParentNestedInput;
};
export type MessageUncheckedUpdateWithoutParentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    children?: Prisma.MessageUncheckedUpdateManyWithoutParentNestedInput;
};
export type MessageUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MessageCountOutputType = {
    children: number;
};
export type MessageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | MessageCountOutputTypeCountChildrenArgs;
};
export type MessageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageCountOutputTypeSelect<ExtArgs> | null;
};
export type MessageCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    content?: boolean;
    userId?: boolean;
    parentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    children?: boolean | Prisma.Message$childrenArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    content?: boolean;
    userId?: boolean;
    parentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    content?: boolean;
    userId?: boolean;
    parentId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    content?: boolean;
    userId?: boolean;
    parentId?: boolean;
};
export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "content" | "userId" | "parentId", ExtArgs["result"]["message"]>;
export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    children?: boolean | Prisma.Message$childrenArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
};
export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Message$parentArgs<ExtArgs>;
};
export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Message";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        children: Prisma.$MessagePayload<ExtArgs>[];
        parent: Prisma.$MessagePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        createdAt: Date;
        content: string;
        userId: string;
        parentId: number | null;
    }, ExtArgs["result"]["message"]>;
    composites: {};
};
export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>;
export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
};
export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Message'];
        meta: {
            name: 'Message';
        };
    };
    findUnique<T extends MessageFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageFindManyArgs>(args?: Prisma.SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageCreateArgs>(args: Prisma.SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageDeleteArgs>(args: Prisma.SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageUpdateArgs>(args: Prisma.SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageUpsertArgs>(args: Prisma.SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageCountArgs>(args?: Prisma.Subset<T, MessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageCountAggregateOutputType> : number>;
    aggregate<T extends MessageAggregateArgs>(args: Prisma.Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
    groupBy<T extends MessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageFieldRefs;
}
export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.Message$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parent<T extends Prisma.Message$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$parentArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageFieldRefs {
    readonly id: Prisma.FieldRef<"Message", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Message", 'DateTime'>;
    readonly content: Prisma.FieldRef<"Message", 'String'>;
    readonly userId: Prisma.FieldRef<"Message", 'String'>;
    readonly parentId: Prisma.FieldRef<"Message", 'Int'>;
}
export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
};
export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
    include?: Prisma.MessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
};
export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type Message$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type Message$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
};
export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
};
