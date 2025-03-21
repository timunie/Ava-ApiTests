# IndexFromContainer Method


Returns the index to the item that has the specified realized container.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract int IndexFromContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function IndexFromContainer ( 
	container As Control
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IndexFromContainer : 
        container : Control -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The generated container to retrieve the item index for.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The index to the item that corresponds to the specified realized container, or -1 if *container* is not found.

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

