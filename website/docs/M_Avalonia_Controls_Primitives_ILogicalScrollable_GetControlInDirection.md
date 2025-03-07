# GetControlInDirection Method


Gets the next control in the specified direction.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Control? GetControlInDirection(
	NavigationDirection direction,
	Control? from
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetControlInDirection ( 
	direction As NavigationDirection,
	from As Control
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetControlInDirection : 
        direction : NavigationDirection * 
        from : Control -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/ILogicalScrollable.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The movement direction.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control from which movement begins.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ILogicalScrollable">ILogicalScrollable Interface</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
