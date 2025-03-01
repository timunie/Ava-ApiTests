import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ShowAt(Control, Boolean) Method


Shows the Flyout for the given control at the current pointer location, as in a ContextFlyout



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ShowAt(
	Control placementTarget,
	bool showAtPointer
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ShowAt ( 
	placementTarget As Control,
	showAtPointer As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ShowAt : 
        placementTarget : Control * 
        showAtPointer : bool -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The target control</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>True to show at pointer</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupFlyoutBase">PopupFlyoutBase Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_PopupFlyoutBase_ShowAt">ShowAt Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
