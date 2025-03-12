# ItemFromContainer Method


Returns the item that corresponds to the specified, generated container.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? ItemFromContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ItemFromContainer ( 
	container As Control
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemFromContainer : 
        container : Control -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L292" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control that corresponds to the item to be returned.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The contained item, or the container if it does not contain an item.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

