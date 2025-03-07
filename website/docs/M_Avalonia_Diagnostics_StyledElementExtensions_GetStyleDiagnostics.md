# GetStyleDiagnostics Method
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>



## Definition
**Namespace:** <a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use AvaloniaObjectExtensions.GetValueStoreDiagnostic instead", 
	true)]
public static StyleDiagnostics GetStyleDiagnostics(
	this StyledElement styledElement
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
<ObsoleteAttribute("Use AvaloniaObjectExtensions.GetValueStoreDiagnostic instead", 
	true)>
Public Shared Function GetStyleDiagnostics ( 
	styledElement As StyledElement
) As StyleDiagnostics
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
[<ObsoleteAttribute("Use AvaloniaObjectExtensions.GetValueStoreDiagnostic instead", 
	true)>]
static member GetStyleDiagnostics : 
        styledElement : StyledElement -> StyleDiagnostics 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Diagnostics/StyledElementExtensions.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledElement">StyledElement</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Diagnostics_StyleDiagnostics">StyleDiagnostics</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_StyledElement">StyledElement</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Diagnostics_StyledElementExtensions">StyledElementExtensions Class</a>  
<a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics Namespace</a>  
