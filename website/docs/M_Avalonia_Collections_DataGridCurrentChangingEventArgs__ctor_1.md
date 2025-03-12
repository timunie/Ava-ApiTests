# DataGridCurrentChangingEventArgs(Boolean) Constructor


Initializes a new instance of the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs" target="_blank" rel="noopener noreferrer">CurrentChangingEventArgs</a> class and sets the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.currentchangingeventargs.iscancelable" target="_blank" rel="noopener noreferrer">IsCancelable</a> property to the specified value.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridCurrentChangingEventArgs(
	bool isCancelable
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	isCancelable As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        isCancelable : bool -> DataGridCurrentChangingEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>true to disable the ability to cancel a <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> change; false to enable cancellation.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCurrentChangingEventArgs">DataGridCurrentChangingEventArgs Class</a>  
<a href="Overload_Avalonia_Collections_DataGridCurrentChangingEventArgs__ctor">DataGridCurrentChangingEventArgs Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

