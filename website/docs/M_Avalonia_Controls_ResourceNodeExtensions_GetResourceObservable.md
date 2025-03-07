# GetResourceObservable(IResourceHost, Object, Func&lt;Object, Object&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<Object?> GetResourceObservable(
	this IResourceHost control,
	Object key,
	Func<Object?, Object?>? converter = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetResourceObservable ( 
	control As IResourceHost,
	key As Object,
	Optional converter As Func(Of Object, Object) = Nothing
) As IObservable(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetResourceObservable : 
        control : IResourceHost * 
        key : Object * 
        ?converter : Func<Object, Object> 
(* Defaults:
        let _converter = defaultArg converter null
*)
-> IObservable<Object> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ResourceNodeExtensions.cs#L107" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
