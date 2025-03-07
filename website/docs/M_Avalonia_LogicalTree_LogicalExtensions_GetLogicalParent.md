# GetLogicalParent(ILogical) Method


Gets the logical parent of an <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>.



## Definition
**Namespace:** <a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ILogical? GetLogicalParent(
	this ILogical logical
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetLogicalParent ( 
	logical As ILogical
) As ILogical
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetLogicalParent : 
        logical : ILogical -> ILogical 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/LogicalTree/LogicalExtensions.cs#L144" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a></dt><dd>The logical.</dd></dl>

#### Return Value
<a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>  
The parent, or null if the logical is unparented.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_LogicalTree_ILogical">ILogical</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_LogicalTree_LogicalExtensions">LogicalExtensions Class</a>  
<a href="Overload_Avalonia_LogicalTree_LogicalExtensions_GetLogicalParent">GetLogicalParent Overload</a>  
<a href="N_Avalonia_LogicalTree">Avalonia.LogicalTree Namespace</a>  
