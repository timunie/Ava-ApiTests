import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetControlInDirection Method


Gets the next control in the specified direction.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual IInputElement? GetControlInDirection(
	NavigationDirection direction,
	Control? from
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function GetControlInDirection ( 
	direction As NavigationDirection,
	from As Control
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetControlInDirection : 
        direction : NavigationDirection * 
        from : Control -> IInputElement 
override GetControlInDirection : 
        direction : NavigationDirection * 
        from : Control -> IInputElement 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  NavigationDirection</dt><dd>The movement direction.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control from which movement begins.</dd></dl>

#### Return Value
IInputElement  
The control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_StackPanel">StackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
