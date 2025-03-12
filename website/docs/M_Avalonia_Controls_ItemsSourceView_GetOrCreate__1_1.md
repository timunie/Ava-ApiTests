# GetOrCreate&lt;T&gt;(IEnumerable) Method


Gets or creates an <a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T)</a> for the specified enumerable.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ItemsSourceView<T> GetOrCreate<T>(
	IEnumerable? items
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetOrCreate(Of T) ( 
	items As IEnumerable
) As ItemsSourceView(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetOrCreate : 
        items : IEnumerable -> ItemsSourceView<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsSourceView.cs#L174" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></dt><dd>The enumerable.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView</a>(T)This method handles the following three cases: - If *items* is null, returns <a href="P_Avalonia_Controls_ItemsSourceView_Empty">Empty</a> - If *items* is an <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a> returns the existing <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a> - Otherwise creates a new <a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsSourceView">ItemsSourceView Class</a>  
<a href="Overload_Avalonia_Controls_ItemsSourceView_GetOrCreate">GetOrCreate Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

