# TryGetFeature&lt;T&gt;(IOptionalFeatureProvider) Method


Queries for an optional feature.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static T TryGetFeature<T>(
	this IOptionalFeatureProvider provider
)
where T : class

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function TryGetFeature(Of T As Class) ( 
	provider As IOptionalFeatureProvider
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member TryGetFeature : 
        provider : IOptionalFeatureProvider -> 'T  when 'T : not struct
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IOptionalFeatureProvider.cs#L20" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions Class</a>  
<a href="Overload_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature">TryGetFeature Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
