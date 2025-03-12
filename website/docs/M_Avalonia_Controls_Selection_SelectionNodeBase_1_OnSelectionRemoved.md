# OnSelectionRemoved Method


Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>, detailing the items removed by a collection change.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSelectionRemoved(
	int index,
	int count,
	IReadOnlyList<T> deselectedItems
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSelectionRemoved ( 
	index As Integer,
	count As Integer,
	deselectedItems As IReadOnlyList(Of T)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSelectionRemoved : 
        index : int * 
        count : int * 
        deselectedItems : IReadOnlyList<'T> -> unit 
override OnSelectionRemoved : 
        index : int * 
        count : int * 
        deselectedItems : IReadOnlyList<'T> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Selection/SelectionNodeBase.cs#L200" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">T</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  

