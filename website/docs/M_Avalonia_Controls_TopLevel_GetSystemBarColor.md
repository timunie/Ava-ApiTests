# GetSystemBarColor Method


Helper for getting the color of the platform's system bars.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static SolidColorBrush? GetSystemBarColor(
	Control control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetSystemBarColor ( 
	control As Control
) As SolidColorBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetSystemBarColor : 
        control : Control -> SolidColorBrush 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TopLevel.cs#L513" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The main view attached to the toplevel, or the toplevel.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_SolidColorBrush">SolidColorBrush</a>  
The current color of the platform's system bars.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
