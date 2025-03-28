# GetOrCreate(IEnumerable) Method


Gets or creates an <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a> for the specified enumerable.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ItemsSourceView GetOrCreate(
	IEnumerable? items
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetOrCreate ( 
	items As IEnumerable
) As ItemsSourceView
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetOrCreate : 
        items : IEnumerable -> ItemsSourceView 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsSourceView.cs#L153" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></dt><dd>The enumerable.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>

## Remarks
This method handles the following three cases: - If *items* is null, returns <a href="P_Avalonia_Controls_ItemsSourceView_Empty">Empty</a> - If *items* is an <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a> returns the existing <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a> - Otherwise creates a new <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView Class</a>  
<a href="Overload_Avalonia_Controls_ItemsSourceView_GetOrCreate">GetOrCreate Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

