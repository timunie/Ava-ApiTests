import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnItemsAdded Method


Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a> when items are added to the source collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual SelectionNodeBase(T).CollectionChangeState OnItemsAdded(
	int index,
	IList items
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnItemsAdded ( 
	index As Integer,
	items As IList
) As SelectionNodeBase(T).CollectionChangeState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnItemsAdded : 
        index : int * 
        items : IList -> SelectionNodeBase(T).CollectionChangeState 
override OnItemsAdded : 
        index : int * 
        items : IList -> SelectionNodeBase(T).CollectionChangeState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Selection/SelectionNodeBase.cs#L250" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1_CollectionChangeState">SelectionNodeBase(T).CollectionChangeState</a>  
A <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1_CollectionChangeState">SelectionNodeBase(T).CollectionChangeState</a> struct containing the details of the adjusted selection.

## 
The implementation in <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a> adjusts the selected ranges, assigning new indexes. Override this method to carry out additional computation when items are added.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  
