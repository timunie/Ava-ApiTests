# ToFunc&lt;TImlp&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaLocator ToFunc<TImlp>(
	Func<TImlp> func
)
where TImlp : TService

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToFunc(Of TImlp As TService) ( 
	func As Func(Of TImlp)
) As AvaloniaLocator
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToFunc : 
        func : Func<'TImlp> -> AvaloniaLocator  when 'TImlp : 'TService
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs#L53" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TImlp)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaLocator">AvaloniaLocator</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaLocator_RegistrationHelper_1">AvaloniaLocator.RegistrationHelper(TService) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
