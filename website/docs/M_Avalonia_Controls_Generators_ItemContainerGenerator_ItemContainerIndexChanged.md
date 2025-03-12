# ItemContainerIndexChanged Method


Called when the index for a container changes due to an insertion or removal in the items collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ItemContainerIndexChanged(
	Control container,
	int oldIndex,
	int newIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ItemContainerIndexChanged ( 
	container As Control,
	oldIndex As Integer,
	newIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemContainerIndexChanged : 
        container : Control * 
        oldIndex : int * 
        newIndex : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Generators/ItemContainerGenerator.cs#L146" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container whose index changed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The old index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The new index.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  

