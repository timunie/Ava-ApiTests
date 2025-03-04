import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RequestedThemeVariant Property


Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ThemeVariant? RequestedThemeVariant { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RequestedThemeVariant As ThemeVariant
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestedThemeVariant : ThemeVariant with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Application.cs#L95" title="View the source code">View Source</a>



#### Property Value
ThemeVariant

## 
Setting RequestedThemeVariant to Default will apply parent's actual theme variant on the current scope.

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
