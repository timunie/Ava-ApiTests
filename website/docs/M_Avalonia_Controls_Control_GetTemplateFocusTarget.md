import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetTemplateFocusTarget Method


Gets the element that receives the focus adorner.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Control? GetTemplateFocusTarget()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function GetTemplateFocusTarget As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetTemplateFocusTarget : unit -> Control 
override GetTemplateFocusTarget : unit -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Control.cs#L258" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The control that receives the focus adorner.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
