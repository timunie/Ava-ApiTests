# OnSourceCollectionChangeFinished Method


Called when the source collection has finished changing, and all CollectionChanged handlers have run.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSourceCollectionChangeFinished()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSourceCollectionChangeFinished
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSourceCollectionChangeFinished : unit -> unit 
override OnSourceCollectionChangeFinished : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Selection/SelectionNodeBase.cs#L174" title="View the source code">View Source</a>



## Remarks
Override this method to respond to the end of a collection change instead of acting at the end of <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a> in order to ensure that all UI subscribers to the source collection change event have had chance to run.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  

