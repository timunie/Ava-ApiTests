# SelectedItems Property


Gets or sets the selected items.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected IList? SelectedItems { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Property SelectedItems As IList
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedItems : IList with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L282" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a>

## Remarks
By default returns a collection that can be modified in order to manipulate the control selection, however this property will return null if <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_Selection">Selection</a> is re-assigned; you should only use _either_ Selection or SelectedItems.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

