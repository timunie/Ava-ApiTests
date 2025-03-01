import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetFeature Method


Queries for an optional feature.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? TryGetFeature(
	Type featureType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetFeature ( 
	featureType As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetFeature : 
        featureType : Type -> Object 
override TryGetFeature : 
        featureType : Type -> Object 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>Feature type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

#### Implements
IOptionalFeatureProvider.TryGetFeature(Type)  
Features currently supported by TryGetFeature(Type): <ul><li>IPlatformSettings</li><li>IActivatableApplicationLifetime</li></ul>



## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
