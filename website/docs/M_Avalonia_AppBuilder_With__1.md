import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# With&lt;T&gt;(Func&lt;T&gt;) Method


Configures platform-specific options



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder With<T>(
	Func<T> options
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function With(Of T) ( 
	options As Func(Of T)
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member With : 
        options : Func<'T> -> AppBuilder 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(T)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="Overload_Avalonia_AppBuilder_With">With Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
