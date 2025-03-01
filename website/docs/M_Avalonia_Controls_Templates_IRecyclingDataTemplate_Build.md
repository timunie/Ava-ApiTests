import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Build(Object, Control) Method


Creates or recycles a control to display the specified data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Control? Build(
	Object? data,
	Control? existing
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Build ( 
	data As Object,
	existing As Control
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Build : 
        data : Object * 
        existing : Control -> Control 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data to display.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>An optional control to recycle.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The *existing* control if supplied and applicable to *data*, otherwise a new control or null.The caller should ensure that any control passed to *existing* originated from the same data template.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_IRecyclingDataTemplate">IRecyclingDataTemplate Interface</a>  
<a href="Overload_Avalonia_Controls_Templates_IRecyclingDataTemplate_Build">Build Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
