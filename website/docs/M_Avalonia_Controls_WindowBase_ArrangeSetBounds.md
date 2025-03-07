# ArrangeSetBounds Method


Called during the arrange pass to set the size of the window.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Size ArrangeSetBounds(
	Size size
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function ArrangeSetBounds ( 
	size As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeSetBounds : 
        size : Size -> Size 
override ArrangeSetBounds : 
        size : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/WindowBase.cs#L311" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The requested size of the window.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The actual size of the window.

## See Also


#### Reference
<a href="T_Avalonia_Controls_WindowBase">WindowBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
