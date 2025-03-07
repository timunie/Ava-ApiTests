# Find&lt;T&gt;(INameScope, String) Method


Finds a named element in an <a href="T_Avalonia_Controls_INameScope">INameScope</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static T Find<T>(
	this INameScope nameScope,
	string name
)
where T : class

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function Find(Of T As Class) ( 
	nameScope As INameScope,
	name As String
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Find : 
        nameScope : INameScope * 
        name : string -> 'T  when 'T : not struct
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/NameScopeExtensions.cs#L22" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_INameScope">INameScope</a></dt><dd>The name scope.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The element type.</dd></dl>

#### Return Value
T  
The named element or null if not found.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_INameScope">INameScope</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_NameScopeExtensions_Find">Find Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
