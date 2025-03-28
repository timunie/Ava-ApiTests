# Filter Property


Gets or sets a callback that is used to determine whether an item is appropriate for inclusion in the view.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Func<Object, bool> Filter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property Filter As Func(Of Object, Boolean)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Filter : Func<Object, bool> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  
A method that is used to determine whether an item is appropriate for inclusion in the view.

## See Also


#### Reference
<a href="T_Avalonia_Collections_IDataGridCollectionView">IDataGridCollectionView Interface</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

