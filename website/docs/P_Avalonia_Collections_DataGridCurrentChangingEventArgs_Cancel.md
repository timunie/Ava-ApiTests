# Cancel Property


Gets or sets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> change should be canceled.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Cancel { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Cancel As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Cancel : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs#L56" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the event should be canceled; otherwise, false. The default is false.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs.iscancelable" target="_blank" rel="noopener noreferrer">IsCancelable</a> property value is false.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCurrentChangingEventArgs">DataGridCurrentChangingEventArgs Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

