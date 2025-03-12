# FuncTemplate&lt;TParam, TControl&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncTemplate(
	Func<TParam, INameScope, TControl> func
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	func As Func(Of TParam, INameScope, TControl)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        func : Func<'TParam, INameScope, 'TControl> -> FuncTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncTemplate%602.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TParam</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Templates_FuncTemplate_2">TControl</a>)</dt><dd>The function used to create the control.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTemplate_2">FuncTemplate(TParam, TControl) Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

