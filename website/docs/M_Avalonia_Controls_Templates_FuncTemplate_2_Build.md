import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Build Method


Creates the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TControl Build(
	TParam param
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Build ( 
	param As TParam
) As TControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Build : 
        param : 'TParam -> 'TControl 
override Build : 
        param : 'TParam -> 'TControl 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TParam</a></dt><dd>The parameter.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TControl</a>  
The created control.

#### Implements
<a href="M_Avalonia_Controls_Templates_ITemplate_2_Build">ITemplate(TParam, TControl).Build(TParam)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl) Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
