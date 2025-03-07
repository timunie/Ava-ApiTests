# ToSingleton&lt;TImpl&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaLocator ToSingleton<TImpl>()
where TImpl : class, new(), TService

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToSingleton(Of TImpl As \{Class, New, TService}) As AvaloniaLocator
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToSingleton : unit -> AvaloniaLocator  when 'TImpl : not struct, new() and 'TService
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs#L76" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaLocator">AvaloniaLocator</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaLocator_RegistrationHelper_1">AvaloniaLocator.RegistrationHelper(TService) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
