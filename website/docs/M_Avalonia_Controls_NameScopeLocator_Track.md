# Track Method


Tracks a named control relative to another control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<Object?> Track(
	INameScope scope,
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Track ( 
	scope As INameScope,
	name As String
) As IObservable(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Track : 
        scope : INameScope * 
        name : string -> IObservable<Object> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/NameScopeLocator.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_INameScope">INameScope</a></dt><dd>The scope relative from which the object should be resolved.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the object to find.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_NameScopeLocator">NameScopeLocator Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

