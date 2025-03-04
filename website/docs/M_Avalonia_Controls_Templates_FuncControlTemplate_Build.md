import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Build Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TemplateResult<Control> Build(
	TemplatedControl param
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Build ( 
	param As TemplatedControl
) As TemplateResult(Of Control)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Build : 
        param : TemplatedControl -> TemplateResult<Control> 
override Build : 
        param : TemplatedControl -> TemplateResult<Control> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncControlTemplate.cs#L22" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a></dt><dd> </dd></dl>

#### Return Value
TemplateResult(<a href="T_Avalonia_Controls_Control">Control</a>)

#### Implements
<a href="M_Avalonia_Controls_Templates_ITemplate_2_Build">ITemplate(TParam, TControl).Build(TParam)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncControlTemplate">FuncControlTemplate Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
