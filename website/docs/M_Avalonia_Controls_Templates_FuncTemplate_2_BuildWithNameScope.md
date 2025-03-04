import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# BuildWithNameScope Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected (TControl , INameScope nameScope) BuildWithNameScope(
	TParam param
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function BuildWithNameScope ( 
	param As TParam
) As ( As TControl, nameScope As INameScope)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BuildWithNameScope : 
        param : 'TParam -> ValueTuple<'TControl, INameScope> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncTemplate%602.cs#L37" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TParam</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TControl</a>, INameScope)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl) Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
