import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetControl Method


Gets the next control in the specified direction.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract IInputElement? GetControl(
	NavigationDirection direction,
	IInputElement? from,
	bool wrap
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function GetControl ( 
	direction As NavigationDirection,
	from As IInputElement,
	wrap As Boolean
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetControl : 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  NavigationDirection</dt><dd>The movement direction.</dd><dt>  IInputElement</dt><dd>The control from which movement begins.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether to wrap around when the first or last item is reached.</dd></dl>

#### Return Value
IInputElement  
The control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
