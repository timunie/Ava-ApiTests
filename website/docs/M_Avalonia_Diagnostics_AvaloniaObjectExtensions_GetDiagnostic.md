# GetDiagnostic Method


Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AvaloniaPropertyValue GetDiagnostic(
	this AvaloniaObject o,
	AvaloniaProperty property
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetDiagnostic ( 
	o As AvaloniaObject,
	property As AvaloniaProperty
) As AvaloniaPropertyValue
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetDiagnostic : 
        o : AvaloniaObject * 
        property : AvaloniaProperty -> AvaloniaPropertyValue 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Diagnostics/AvaloniaObjectExtensions.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd></dl>

#### Return Value
<a href="T_Avalonia_Diagnostics_AvaloniaPropertyValue">AvaloniaPropertyValue</a>  
A <a href="T_Avalonia_Diagnostics_AvaloniaPropertyValue">AvaloniaPropertyValue</a> that can be used to diagnose the state of the property on the object.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics Namespace</a>  

