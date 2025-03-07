# ToConstant&lt;TImpl&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaLocator ToConstant<TImpl>(
	TImpl constant
)
where TImpl : TService

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToConstant(Of TImpl As TService) ( 
	constant As TImpl
) As AvaloniaLocator
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToConstant : 
        constant : 'TImpl -> AvaloniaLocator  when 'TImpl : 'TService
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaLocator.cs#L47" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  TImpl</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AvaloniaLocator">AvaloniaLocator</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaLocator_RegistrationHelper_1">AvaloniaLocator.RegistrationHelper(TService) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
