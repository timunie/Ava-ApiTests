import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetMaxLines Method


Writes the attached property BaselineOffset to the given element.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetMaxLines(
	Control control,
	int maxLines
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetMaxLines ( 
	control As Control,
	maxLines As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetMaxLines : 
        control : Control * 
        maxLines : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TextBlock.cs#L572" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element to which to write the attached property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The property value to set</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBlock">TextBlock Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
