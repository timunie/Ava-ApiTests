import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnSourceCollectionChanged Method


Called when the <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_Source">Source</a> collection changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSourceCollectionChanged(
	NotifyCollectionChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSourceCollectionChanged ( 
	e As NotifyCollectionChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSourceCollectionChanged : 
        e : NotifyCollectionChangedEventArgs -> unit 
override OnSourceCollectionChanged : 
        e : NotifyCollectionChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a></dt><dd>The details of the collection change.</dd></dl>The implementation in <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a> calls <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnItemsAdded">OnItemsAdded(Int32, IList)</a> and OnItemsRemoved(Int32, IList) in order to calculate how the collection change affects the currently selected items. It then calls <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnIndexesChanged">OnIndexesChanged(Int32, Int32)</a> and <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSelectionRemoved">OnSelectionRemoved(Int32, Int32, IReadOnlyList(T))</a> if necessary, according to the <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1_CollectionChangeState">SelectionNodeBase(T).CollectionChangeState</a> returned by those methods. Override this method and <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChangeFinished">OnSourceCollectionChangeFinished()</a> to provide custom handling of source collection changes.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  
