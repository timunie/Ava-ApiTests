# OnIndexesChanged Method


Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>, detailing the indexes changed by the collection changing.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnIndexesChanged(
	int shiftIndex,
	int shiftDelta
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnIndexesChanged ( 
	shiftIndex As Integer,
	shiftDelta As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnIndexesChanged : 
        shiftIndex : int * 
        shiftDelta : int -> unit 
override OnIndexesChanged : 
        shiftIndex : int * 
        shiftDelta : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Selection/SelectionNodeBase.cs#L186" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The first index that was shifted.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>If positive, the number of items inserted, or if negative the number of items removed.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  

